import {Box, BoxProps} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

export default function DarkBackground(props: PropsWithChildren<BoxProps>) {
  const {children, ...boxProps} = props;

  return (
    <Box bgColor="purple.900" color="yellow.300" {...boxProps}>{children}</Box>
  );
}
