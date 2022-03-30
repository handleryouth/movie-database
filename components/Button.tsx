import { Button } from "@chakra-ui/react";

import { CustomButtonProps } from "types";

const CustomButton = ({ text, ...rest }: CustomButtonProps) => {
  return <Button {...rest}>{text}</Button>;
};

export default CustomButton;
