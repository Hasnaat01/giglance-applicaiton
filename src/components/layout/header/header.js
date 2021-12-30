import React from "react";

// Components
import { Logo } from "./logo";
import { Heading } from "./heading";

// Style
import { HeaderBody } from "./styled";

export const Header = ({ heading }) => {
  return (
    <HeaderBody className="dashboard-header">
      <Logo />
      <Heading title={heading} />
    </HeaderBody>
  );
};
