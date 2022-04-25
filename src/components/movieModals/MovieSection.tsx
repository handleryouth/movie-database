import { ModalSectionProps } from 'types'

const ModalSection = ({ title, value }: ModalSectionProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {typeof value === 'string' ? <p>{value}</p> : value}
    </div>
  )
}

export default ModalSection
