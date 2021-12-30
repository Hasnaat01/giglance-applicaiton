import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) =>
    (props.primary && `var(--primary-color)`) ||
    (props.gray && `var(--light-gray)`) ||
    (props.primaryOutline && `var(--white)`) ||
    (props.grayOutline && `var(--white)`) ||
    (props.disabledThickBtn && `#ebebeb !important`) ||
    (props.enableThickBtn && "var(--primary-color) !important") ||
    (props.enableOutlineBtn && `var(--white)`) ||
    (props.disabledOutlineBtn && `blue`)};

  font-weight: 600;
  border: 1px solid
    ${(props) =>
      (props.primaryOutline && `var(--primary-color)`) ||
      (props.grayOutline && `var(--off-white)`) ||
      (props.disabledThickBtn && `#fff`) ||
      (props.enableThickBtn && "var(--primary-color)") ||
      (props.enableOutlineBtn && `var(--primary-color)`) ||
      (props.disabledOutlineBtn && `#ebebeb !important`)};
  border-radius: 0px;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${(props) =>
    (props.primaryOutline && `var(--primary-color)`) ||
    (props.grayOutline && `var(--black)`) ||
    (props.primary && `var(--white)`) ||
    (props.gray && `var(--white)`)};

  & span {
    color: ${(props) => props.enableThickBtn && `var(--white) !important`};
    opacity: ${(props) => props.enableThickBtn && `1 !important`};
    color: ${(props) => props.disabledThickBtn && `#3a3a3a !important`};
    opacity: ${(props) => props.disabledThickBtn && `0.5 !important`};

    color: ${(props) => props.dis};
  }

  ${(props) =>
    props.profileEditScreenButton &&
    `
    font-weight: 600;
    border-radius: 0px;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-transform: uppercase;
    padding: 0.9375rem 1rem;
  `}

  @media (max-width: 599px) and (min-width: 300px) {
    &.mb-edit-profile-btn {
      font-size: 0.8rem !important;
      letter-spacing: 1px;
      padding: 0.7rem 0.9rem !important;
    }
  }
`;
