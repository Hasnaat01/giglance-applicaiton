import React from "react";

// Style
import { StyledButton } from "./styled";

export const HollowButton = ({
  children,

  btnPrimaryOutline,
  btnGrayOutline,
  profileEditBtn,

  // Props to enable or disable hollow btn's
  enableOutlineBtn,
  disabledOutlineBtn,

  ...restProps
}) => {
  return (
    <React.Fragment>
      <StyledButton
        primaryOutline={btnPrimaryOutline}
        grayOutline={btnGrayOutline}
        profileEditScreenButton={profileEditBtn}
        enableOutlineBtn={enableOutlineBtn}
        disabledOutlineBtn={disabledOutlineBtn}
        disabled={disabledOutlineBtn}
        {...restProps}
      >
        {children}
      </StyledButton>
    </React.Fragment>
  );
};
