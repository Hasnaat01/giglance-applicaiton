import React from "react";
import { HeadingWrapper, Text } from "./styled";

export const Heading = ({ title }) => {
  return (
    <HeadingWrapper className="txt-col">
      <Text>{title}</Text>
    </HeadingWrapper>
  );
};
