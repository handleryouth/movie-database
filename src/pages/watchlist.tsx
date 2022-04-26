import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { MovieCard, MovieModal, Seo } from 'components'
import { RootState } from 'utils'

const Watchlist: NextPage = () => {
  const movie = useSelector((state: RootState) => state.movie)
  const [idNumber, setIdNumber] = useState<number>()

  return (
    <main>
      <Seo />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-hue-rotate w-full h-full absolute -z-10 " />
      <h1 className="text-center">My Watchlist</h1>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap="1rem"
        padding="0 1rem"
        margin="0 auto"
        maxW="80rem"
      >
        {movie.length ? (
          movie.map((movie, index) => (
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
          <Text>You haven&apos;t added anything yet</Text>
        )}
      </Flex>
    </main>
  )
}

export default Watchlist
