import React from "react";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

import { Wrapper, Heading, SubHeading, Txt } from "./styled.js";

export default function InvalidPage() {
  document.title = "Page not found | gigLance";
  let history = useNavigate();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Heading>404</Heading>
      <SubHeading>Opps! Page not found</SubHeading>
      <Txt>Sorry, the page yo're looking for doesn't exist.</Txt>
      <Button onClick={goToPreviousPath} className="px-5 py-2" primary>
        Back
      </Button>
    </Wrapper>
  );
}
