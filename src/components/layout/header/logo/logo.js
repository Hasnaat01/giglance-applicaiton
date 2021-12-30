import React from "react";

import { SiteBrand, SiteBrandWrapper } from "./styled";

// Libraries
import { Link } from "react-router-dom";

// Logo img
import LogoImg from "../../../../assets/images/dashboard/logo.png";

export const Logo = () => {
  return (
    <SiteBrandWrapper>
      <Link to="/">
        <SiteBrand src={LogoImg} />
      </Link>
    </SiteBrandWrapper>
  );
};
