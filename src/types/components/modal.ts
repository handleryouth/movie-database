import { ReactNode } from 'react'

export interface CustomModalProps {
  title: string
  body: string
  image: string
  released: Date
  directors: string[]
  modalState: boolean
  onCloseFunction: () => void
}

export interface ModalSectionProps {
  title: string
  value: string | ReactNode
}
