import React from "react";
import { Container, Text } from "./styled";

export function Badge({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Text>{children}</Text>
    </Container>
  );
}
