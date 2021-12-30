import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileCard = styled.div`
  padding: 1.25rem;
  margin-bottom: 0.625rem;

  & #username {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & .short-name {
      font-weight: normal;
      font-size: 1.125rem;
      opacity: 0.78;
      margin-bottom: 0.5rem;
    }
  }

  & .save-changes-or-cancel-btns {
    display: flex;
    flex-direction: row;
    column-gap: 1.5rem;
    margin-top: 1.25rem;
  }

  & .btn-txt {
    color: #3a3a3a;
    opacity: 0.5;
  }

  @media (max-width: 599px) and (min-width: 300px) {
    margin-bottom: 2rem;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.875rem;

  @media (max-width: 799px) and (min-width: 600px) {
    column-gap: 1.3rem;
  }
  @media (max-width: 599px) and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
`;
export const ImageBox = styled.div`
  width: 176px;
  height: 176px;
  background: #0a70b0;
  border-radius: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff7a;
  font-family: "Manrope";
  font-weight: 900;
  font-size: 50px;
`;
export const UserImg = styled.img`
  width: 11rem;
`;
export const CardHeading = styled.div`
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0rem;
  margin-bottom: 1.1875rem;

  &#changePass {
    margin-bottom: 0rem;
  }

  &#edit-input-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1.875rem;
    outline: none;
    border: none;
    width: 18.75rem;
  }
  @media (max-width: 599px) and (min-width: 300px) {
    & #edit-input-wrapper {
      width: 12.75rem !important;
    }
  }
  & .btn-txt {
    color: #3a3a3a;
    opacity: 0.5;
  }

  @media (max-width: 799px) and (min-width: 300px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;
export const IconBox = styled(Link)`
  margin-left: 2.5rem;

  @media (max-width: 799px) and (min-width: 300px) {
    margin-left: 1rem;

    & svg {
      width: 1rem;
    }
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1.875rem;

  & .field-label {
    display: block;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    opacity: 0.5;
    margin-bottom: 0.5rem;
  }

  & .input-field {
    font-size: 1.125rem;
    line-height: 2.5rem;
    display: block;
    outline: none;
    height: 3.5rem;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 1rem 1rem;

    @media (max-width: 799px) and (min-width: 600px) {
      height: 3rem;
    }
  }
  @media (max-width: 599px) and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    & .input-field {
      height: 3rem;
    }
  }
  & #icon-input-field {
    width: 100%;
    background: #ffffff;
    border: none;
    padding: none;
  }
`;

export const DeletePaymentMethod = styled.div`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5625;
  color: var(--primary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.25rem;

  @media (max-width: 799px) and (min-width: 600px) {
    & #txt {
      font-size: 1rem;
    }
    & svg {
      width: 1rem;
      height: 1rem;
    }
  }

  & svg {
    width: 1.125rem;
    height: 1.125rem;
    margin-left: 0.75rem;
  }
`;
