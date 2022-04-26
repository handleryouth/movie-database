import { useEffect, useState, useCallback, useRef } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { CircularProgress, Flex, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { MovieCard, CustomButton, MovieModal, Seo } from 'components'
import { MovieProps } from 'types'
import {
  QUERY_GET_ALL_MOVIES_THUMBNAILS,
  QUERY_GET_SPECIFIC_MOVIE_TITLE,
  useDebounce,
} from 'utils'

const Home: NextPage = () => {
  const offsetNumber = useRef(10)
  const [idNumber, setIdNumber] = useState<number>()
  const searchOffset = useRef(10)
  const [, setForceUpdate] = useState(false)
  const debounce = useDebounce()
  const searchValue = useRef('')

  //no cache is used to make sure that the data is always fresh and because it the query is used in another component
  const {
    data: responseData,
    loading,
    fetchMore,
  } = useQuery(QUERY_GET_ALL_MOVIES_THUMBNAILS, {
    variables: {
      input: {
        offset: 0,
        limit: 10,
      },
    },
    fetchPolicy: 'no-cache',
  })

  const [
    handleSearchData,
    { loading: searchLoading, data: searchResult, fetchMore: fetchMoreResult },
  ] = useLazyQuery(QUERY_GET_SPECIFIC_MOVIE_TITLE, {
    variables: {
      input: {
        title: searchValue.current,
        properties: {
          limit: 10,
          offset: 0,
        },
      },
    },
  })

  const handlePagination = useCallback(() => {
    fetchMore({
      variables: {
        input: {
          offset: offsetNumber.current,
          limit: 10,
        },
      },
    }).then(() => {
      offsetNumber.current += 10
      searchOffset.current = 0
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMore, offsetNumber.current])

  const handleSearchPagination = useCallback(() => {
    fetchMoreResult({
      variables: {
        input: {
          title: searchValue.current,
          properties: {
            limit: 10,
            offset: searchOffset.current,
          },
        },
      },
    }).then(() => {
      offsetNumber.current = 0
      searchOffset.current += 10
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMoreResult, searchOffset.current, searchValue.current])

  const handleSearchChange = useCallback(
    (value: string) => {
      searchValue.current = value

      debounce(() => {
        setForceUpdate((prevState) => !prevState)
      })
    },
    [debounce],
  )

  useEffect(() => {
    if (searchValue.current) {
      handleSearchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSearchData, searchValue.current])

  return (
    <main>
      <Seo />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-hue-rotate w-full h-full absolute -z-10 " />
      <h1 className=" pt-4 text-center">Movies and Series</h1>
      <Flex width="full" justifyContent="center" marginBottom="4rem">
        <Input
          onChange={(e) => handleSearchChange(e.target.value)}
          width="full"
          bg="white"
          minW="280px"
          maxW="500px"
          size="md"
          placeholder="Search your movies or series"
        />
      </Flex>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap="1rem"
        padding="0 1rem"
        margin="0 auto"
        maxW="80rem"
      >
        {!searchLoading && !loading ? (
          (
            (searchValue.current && searchResult
              ? searchResult.getSpecificMovieTitle
              : responseData.getAllMovies) as MovieProps[]
          ).map((movie, index) => (
            <div key={index}>
              <MovieModal
                title={movie.title}
                directors={movie.directors}
                body={movie.fullplot}
                released={movie.released}
                modalState={idNumber === index}
                image={movie.poster}
                onCloseFunction={() => setIdNumber(undefined)}
                movieData={movie}
              />
              <MovieCard
                onClick={() => setIdNumber(index)}
                genres={movie.genres}
                plot={movie.plot}
                type={movie.type}
                poster={movie.poster}
                released={movie.released}
                runtime={movie.runtime}
                title={movie.title}
              />
            </div>
          ))
        ) : (
          <CircularProgress isIndeterminate color="green.300" />
        )}
      </Flex>

      <div className="py-4">
        <CustomButton
          justifyContent="center"
          alignItems="center"
          display="flex"
          width="100%"
          minWidth="200px"
          maxWidth="400px"
          margin="0 auto"
          colorScheme="blackAlpha"
          onClick={() =>
            searchValue.current ? handleSearchPagination() : handlePagination()
          }
        >
          Fetch more
        </CustomButton>
      </div>
    </main>
  )
}

export default Home
