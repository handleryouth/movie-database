import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import MovieSection from './MovieSection'

import CustomButton from 'components/Button'
import { CustomModalProps } from 'types'
import { addMovie, RootState } from 'utils'

const CustomModal = ({
  title,
  body,
  onCloseFunction,
  modalState,
  image,
  directors,
  released,
  movieData,
}: CustomModalProps) => {
  const dispatch = useDispatch()
  const selectedMovie = useSelector((state: RootState) => state.movie)
  return (
    <Modal isOpen={modalState} onClose={onCloseFunction}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="1.5rem" className="prose">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="prose">
          {image ? (
            <div className="text-center">
              <Image
                src={image}
                alt="Movie Poster"
                width={200}
                height={350}
                layout="fixed"
              />
            </div>
          ) : (
            <p className="w-full h-[100px] flex items-center justify-center text-center">
              Sorry, this movie has no poster{' '}
            </p>
          )}

          <MovieSection title="Summary" value={body ?? '-'} />
          <MovieSection
            title="Directors"
            value={
              directors.length
                ? directors.map((director, index) => (
                    <p className="my-0" key={index}>
                      {director}
                    </p>
                  ))
                : '-'
            }
          />
          <MovieSection
            title="Year"
            value={released ? released.toString().slice(0, 4) : '-'}
          />
        </ModalBody>

        <ModalFooter>
          <CustomButton
            onClick={() =>
              selectedMovie.includes(movieData)
                ? null
                : dispatch(addMovie(movieData))
            }
          >
            {selectedMovie.includes(movieData) ? 'Added' : 'Add to list'}
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
