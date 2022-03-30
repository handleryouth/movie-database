import { Badge } from "@chakra-ui/react";

import { CustomBadgeProps } from "types";

const CustomBadge = ({ text, colorScheme }: CustomBadgeProps) => {
  return <Badge colorScheme={colorScheme}>{text}</Badge>;
};

export default CustomBadge;
