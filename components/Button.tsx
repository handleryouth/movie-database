import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  text: string;
}

const CustomButton = ({ text, ...rest }: CustomButtonProps) => {
  return <Button {...rest}>{text}</Button>;
};

export default CustomButton;
