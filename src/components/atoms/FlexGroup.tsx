import {PropsWithChildren} from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

export default function ControlGroup({children, ...flexProps}: PropsWithChildren<FlexProps>) {
  return (
    <Flex direction={{base: "column", md: "row"}} gap="1.5rem" {...flexProps}>
      {children}
    </Flex>
  );
}
