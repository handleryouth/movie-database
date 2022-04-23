import { useEffect, useRef, useState } from 'react'

import { useQuery } from '@apollo/client'
import { CircularProgress } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Card, CustomButton, CustomModal, Navbar } from 'components'
import { MovieProps } from 'types'
import {
  QUERY_GET_ALL_MOVIES_THUMBNAILS,
  QUERY_GET_SPECIFIC_MOVIES_THUMBNAILS,
} from 'utils'

const Home: NextPage = () => {
  const [offset, setOffset] = useState(20)
  const [idNumber, setIdNumber] = useState<number>()
  const {
    data: responseData,
    loading,
    fetchMore,
  } = useQuery(QUERY_GET_SPECIFIC_MOVIES_THUMBNAILS, {
    variables: {
      offset: 0,
      limit: 10,
      type: 'series',
    },
  })
  const listData = useRef<MovieProps[]>([])
  const [, setForceUpdate] = useState(false)

  useEffect(() => {
    if (responseData) {
      listData.current = responseData.getSpecificMovies
      setForceUpdate((prevState) => !prevState)
    }
  }, [responseData])

  return (
    <div>
      <Navbar />

      <main>
        <h1>Movies</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {!loading ? (
            listData.current.map((movie, index) => (
              <>
                <CustomModal
                  key={index}
                  title={movie.title}
                  directors={movie.directors}
                  body={movie.fullplot}
                  released={movie.released}
                  modalState={idNumber === index}
                  image={movie.poster}
                  onCloseFunction={() => setIdNumber(undefined)}
                />
                <Card
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
          text="Fetch more"
          className="!w-full"
          colorScheme="linkedin"
          onClick={() => {
            fetchMore({
              variables: {
                offset: offset,
                limit: 10,
                type: 'series',
              },
            }).then((fetchMoreResult) => {
              listData.current = [
                ...listData.current,
                ...fetchMoreResult.data.getSpecificMovies,
              ]
              setOffset((prevState) => prevState + 10)
            })
          }}
        />
      </main>
    </div>
  )
}

export default Home
