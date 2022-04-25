import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import CustomBadge from './Badge'

import { CardProps } from 'types'

const MovieCard = ({
  poster,
  title,
  plot,
  released,
  genres,
  runtime,
  onClick,
  type,
}: CardProps) => {
  return (
    <Box
      borderWidth="2px"
      width="21rem"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      cursor="pointer"
      className=" hover:border-blue-500 transition-colors"
      onClick={onClick}
    >
      <Container display="flex" gap="0.75rem" className="flex-col !sm:flex-row">
        <Flex alignItems="center" justifyContent="center">
          <Image
            src={
              poster ??
              'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
            }
            alt="Movie Poster"
            layout="fixed"
            className="!pt-4"
            width={235}
            height={340}
          />
        </Flex>
        <Container
          overflowY="auto"
          height="30rem"
          className="p-[0.8rem] prose-ul:p-0 prose-h2:mt-0 text-lg prose-p:my-2"
        >
          <h2 className="text-2xl mb-2">{title}</h2>
          <p>{runtime} minutes</p>
          <p>{released ? released.toString().slice(0, 4) : '-'}</p>
          <ul className="flex gap-2 prose-li:p-0 prose-li:m-0">
            {genres.map((genre, index) => (
              <li key={index}>
                <CustomBadge text={genre} colorScheme="green" />
              </li>
            ))}
          </ul>

          <h4>Summary</h4>
          <p className="h-32 overflow-auto">{plot ?? '-'}</p>

          <h4>Type</h4>
          <p>{type}</p>
        </Container>
      </Container>
    </Box>
  )
}

export default MovieCard
