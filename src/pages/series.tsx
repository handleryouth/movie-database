import { useRef, useState, useCallback } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { CircularProgress } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { MovieCard, CustomButton, MovieModal, Seo } from 'components'
import { MovieProps } from 'types'
import {
  QUERY_GET_ALL_MOVIES_THUMBNAILS,
  QUERY_GET_SPECIFIC_MOVIE_TITLE,
} from 'utils'

const Series: NextPage = () => {
  const [offset, setOffset] = useState(10)
  const [searchOffset, setSearchOffset] = useState(10)
  const searchValue = useRef('')
  const [idNumber, setIdNumber] = useState<number>()

  const {
    data: responseData,
    loading,
    fetchMore,
  } = useQuery(QUERY_GET_ALL_MOVIES_THUMBNAILS, {
    variables: {
      input: {
        offset: 0,
        limit: 10,
        type: 'series',
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
          offset: searchOffset,
          limit: 10,
        },
      },
    }).then(() => {
      setOffset(0)
      setSearchOffset((prevState) => prevState + 10)
    })
  }, [fetchMore, searchOffset])

  const handleSearchPagination = useCallback(() => {
    fetchMoreResult({
      variables: {
        input: {
          title: searchValue.current,
          properties: {
            limit: 10,
            offset: offset,
          },
        },
      },
    }).then(() => {
      setSearchOffset(0)
      setOffset((prevState) => prevState + 10)
    })
  }, [fetchMoreResult, offset])

  return (
    <main>
      <Seo />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-hue-rotate w-full h-full absolute -z-10 " />
      <h1 className="text-center py-4">Series</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {!loading ? (
          (responseData.getAllMovies as MovieProps[]).map((movie, index) => (
            <>
              <MovieModal
                key={movie._id.toString()}
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
                key={index}
                onClick={() => setIdNumber(index)}
                genres={movie.genres}
                type={movie.type}
                plot={movie.plot}
                poster={movie.poster}
                released={movie.released}
                runtime={movie.runtime}
                title={movie.title}
              />
            </>
          ))
        ) : (
          <CircularProgress isIndeterminate color="green.300" />
        )}
      </div>

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
    </main>
  )
}

export default Series
