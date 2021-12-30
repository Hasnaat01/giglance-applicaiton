import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 755px) {
    button {
      font-size: 16px;
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }
`;
export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 200px;
  text-transform: uppercase;

  @media only screen and (max-width: 755px) {
    font-size: 130px !important;
  }
`;
export const SubHeading = styled.h2`
  font-size: 35px;
  margin: 0px;
  font-weight: 700;
  font-family: "Poppins";
  margin-top: -15px;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media only screen and (max-width: 755px) {
    font-size: 21px !important;
  }
`;
export const Txt = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 20px;

  @media only screen and (max-width: 755px) {
    font-size: 13px !important;
  }
`;
