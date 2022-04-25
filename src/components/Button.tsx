import { Button } from '@chakra-ui/react'

import { CustomButtonProps } from 'types'

const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return <Button {...rest}>{children}</Button>
}

export default CustomButton
