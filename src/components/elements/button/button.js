import React from "react";

// Style
import { StyledButton } from "./styled";

export const Button = ({
  children,
  className,
  btnPrimary,
  btnGray,
  btnPrimaryOutline,
  btnGrayOutline,
  profileEditBtn,
  disabledThickBtn,
  enableThickBtn,

  // Props to enable or disable hollow btn's
  enableOutlineBtn,
  disabledOutlineBtn,

  ...restProps
}) => {
  return (
    <React.Fragment>
      <StyledButton
        primary={btnPrimary}
        gray={btnGray}
        primaryOutline={btnPrimaryOutline}
        grayOutline={btnGrayOutline}
        profileEditScreenButton={profileEditBtn}
        disabledThickBtn={disabledThickBtn}
        enableThickBtn={enableThickBtn}
        enableOutlineBtn={enableOutlineBtn}
        disabledOutlineBtn={disabledOutlineBtn}
        disabled={disabledThickBtn}
        className={className}
        {...restProps}
      >
        {children}
      </StyledButton>
    </React.Fragment>
  );
};
