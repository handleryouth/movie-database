import { Badge, BadgeProps } from "@chakra-ui/react";

export interface CustomBadgeProps extends BadgeProps {
  text: string;
}

const CustomBadge = ({ text, colorScheme }: CustomBadgeProps) => {
  return <Badge colorScheme={colorScheme}>{text}</Badge>;
};

export default CustomBadge;
