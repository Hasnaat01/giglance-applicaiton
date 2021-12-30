import styled from "styled-components";
import { Link } from "react-router-dom";
import SecondColBgImg from "../../../assets/images/authentication/login.png";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 999px) and (min-width: 300px) {
    justify-content: center;
  }
`;
export const ErrorBox = styled.div`
  color: #b30909;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.2px;
  max-width: 300px;
  height: auto;
  margin-bottom: 10px;
`;
export const FirstColumn = styled.div`
  flex: 0.3;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 3000px) and (min-width: 701px) {
    & {
      flex: 0.3;
    }
  }
  @media (max-width: 999px) and (min-width: 700px) {
    flex: 0.6;
  }
  @media (max-width: 699px) and (min-width: 300px) {
    flex: 1;
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
`;
export const LogoBox = styled.div``;
export const MyLogo = styled.img`
  width: 10.625rem;

  @media (max-width: 999px) and (min-width: 700px) {
    width: 13.625rem;
  }
`;
export const Breadcrump = styled.div`
  line-height: 5.1875rem;

  @media (max-width: 999px) and (min-width: 700px) {
    line-height: 4.5rem;
  }
`;
export const BreadcrumpText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 1600px) and (min-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 999px) and (min-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const BreadcrumpHighlightedText = styled.span`
  color: var(--primary-color) !important;
`;

export const FormWrapper = styled.div``;
export const ForgotPasswordLinkWrapper = styled.div`
  margin: 1.25rem 0rem 2.5rem 0rem;
`;
export const ForgotPassLink = styled(Link)`
  font-size: 0.75rem;
  color: var(--black);
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: var(--black);
  }

  @media (max-width: 1600px) and (min-width: 1000px) {
    & {
      font-size: 0.8rem;
    }
  }
`;
export const SignUpLinkWrapper = styled.div`
  line-height: 1rem;
  text-align: center;
`;
export const SignUpLink = styled(Link)`
  font-size: 0.8125rem;
  color: var(--black);
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: var(--black);
  }

  @media (max-width: 1600px) and (min-width: 1000px) {
    & {
      font-size: 0.9rem;
    }
  }
`;

/* Second column */

export const ImgWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const SecondColImg = styled.img`
  width: 100%;

  @media (max-width: 1600px) and (min-width: 1000px) {
    & {
      width: 550px;
    }
  }
`;
