import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) =>
    (props.primaryOutline && `var(--white)`) ||
    (props.grayOutline && `var(--white)`) ||
    (props.enableOutlineBtn && `var(--white)`) ||
    (props.disabledOutlineBtn && `blue`)};

  font-weight: 600;
  border-color: var(--primary-color);
  border: 1px solid
    ${(props) => !props.disabledOutlineBtn && `var(--primary-color) !important`};
  ${(props) =>
    (props.primaryOutline && `var(--primary-color)`) ||
    (props.grayOutline && `var(--off-white)`) ||
    (props.enableOutlineBtn && `var(--primary-color)`)};

  border: 1px solid
    ${(props) => props.disabledOutlineBtn && `#ebebeb !important`};
  border-radius: 0px;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${(props) =>
    (props.primaryOutline && `var(--primary-color)`) ||
    (props.grayOutline && `var(--black)`)};

  & span {
    color: ${(props) =>
      props.enableOutlineBtn && `var(--primary-color) !important`};
    opacity: ${(props) => props.enableOutlineBtn && `1 !important`};
    color: ${(props) => props.disabledOutlineBtn && `#3a3a3a !important`};
    opacity: ${(props) => props.disabledOutlineBtn && `0.5 !important`};
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
