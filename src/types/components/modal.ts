import { ReactNode } from 'react'

import { MovieProps } from 'types/movie'

export interface CustomModalProps {
  title: string
  body: string
  image: string
  released: Date
  directors: string[]
  modalState: boolean
  onCloseFunction: () => void
  movieData: MovieProps
}

export interface ModalSectionProps {
  title: string
  value: string | ReactNode
}
