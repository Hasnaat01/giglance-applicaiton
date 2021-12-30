import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh);
  row-gap: 27px;
`;

export const FormContentWrapper = styled.div`
  padding: 50px 150px 0px 150px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media only screen and (max-width: 767px) {
    padding: 40px 30px;
    padding-bottom: 0px;
  }
`;

export const LogoBox = styled.div`
  flex: 0.1;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const ContentBox = styled.div`
  margin: 100px 0px;
  flex: 0.6;
`;

export const EnterButtonBox = styled.div`
  margin-top: 40px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  & .highlighter {
    background: var(--primary-color);
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    margin: 0px 8px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const TabButtonBox = styled.div`
  margin-top: 40px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  flex: 0.5;

  & .highlighter {
    background: var(--primary-color);
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    margin: 0px 8px;
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    flex: 0.7;
  }
  @media only screen and (max-width: 767px) {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    font-family: inter;
  }
`;

export const AlreadyHaveAccount = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  font-family: inter;
  display: flex;
  justify-content: end;
  align-items: end;
  flex: auto;

  span {
    background: var(--primary-color);
    padding: 4px 6px;
    color: var(--white);
    border-radius: 5px;
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    flex: 1;
  }
  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const StepsRibbon = styled.div`
  position: relative;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  background: #0a70b0;
  opacity: 0.1;
  flex: 0.1;
`;

export const StepsProgress = styled.div`
  background: #0a70b0;
  opacity: 1;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const StepsButtons = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 64px;
  justify-content: space-between;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background: white;
  overflow: hidden;
`;

export const SlideBox = styled.div``;

export const SlideTitle = styled.h1`
  color: var(--primary-color);
  font-family: Manrope;
  font-weight: bold;
  font-size: 36px;

  @media only screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SlideTagline = styled.p`
  color: var(--black);
  font-size: 18px;
  line-height: 25px;
  max-width: 471px;

  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
    max-width: 300px;
  }
`;

export const FieldsWrapper = styled.div`
  margin-top: 38px;
`;

export const RadioGroup = styled.div``;

export const RadioField = styled.div`
  margin-bottom: 16px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  max-width: 400px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 8px;

  @media only screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const CategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const JobCategory = styled.div`
  flex: 1 1 auto;
  min-width: 50%;

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    min-width: 100%;
  }
`;

export const RadioButtonBox = styled.span`
  opacity: 0;
`;

export const LetterBox = styled.span`
  border: 1px solid #0a70b0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 14px;
  color: #0a70b0;
  font-weight: 500;
  font-size: 18px;
  font-family: "Manrope";
  width: 40px;
  height: 40px;
  line-height: 25px;

  @media only screen and (max-width: 767px) {
    font-size: 14px;
    padding: 7px 12px;
  }
`;

export const RadioButtonLabel = styled.label`
  margin: 0px;
  position: relative;
  left: -13px;
  bottom: 2px;

  & input[type="radio"] {
    opacity: 0;

    &:checked ~ .letterBox {
      background: var(--primary-color);
      color: white;
    }
  }
  & input[type="checkbox"] {
    opacity: 0;

    &:checked ~ .letterBox {
      background: var(--primary-color);
      color: white;
    }
  }
`;

export const OptionFieldText = styled.span`
  font-family: Manrope;
  font-weight: normal;
  font-size: 24px;
  margin-left: 12px;

  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const TextField = styled.div`
  margin-bottom: 36px;
  &:nth-last-child {
    margin-bottom: 0px;
  }
`;

export const TextFieldLabel = styled.label`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: block;
`;

export const TextFieldBox = styled.span`
  & input {
    width: 400px;
    border: none;
    border-bottom: 1px solid #d7d7d7;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    outline: none;

    &:focus {
      border-color: var(--primary-color);
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const CardBox = styled.label`
  width: 239px;
  height: 149px;
  text-align: center;
  position: relative;
  display: inline-block;
  background: #f2f2f2;
  margin-right: 16px;

  & input[type="radio"] {
    opacity: 0;

    &:checked ~ .checkedBadge {
      display: block;
    }
  }
`;

export const CheckedBadge = styled.img`
  display: none;
  position: absolute;
  right: -8px;
  top: -10px;
`;

export const CardLetter = styled.span`
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  padding: 9px 14px;
  position: absolute;
  top: 8px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  left: 8px;
`;

export const CardContentBox = styled.div``;

export const CardHeading = styled.h1`
  color: var(--primary-color);
  font-family: Manrope;
  font-weight: bold;
  font-size: 36px;
`;

export const CardSubHeading = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;

export const ArrowBtn = styled.button`
  width: 24px;
  height: 24px;
  background: white;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupBottomRibbon = styled.div`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
  }
`;
export const ErrorMsgBox = styled.p`
  margin: 0px;
  font-size: 13px;
  font-family: "Inter";
  margin-top: -10px;
  margin-bottom: -10px;
`;
