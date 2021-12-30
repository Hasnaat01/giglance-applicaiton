import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppForm = styled.form``;
export const AppFormGroup = styled.div`
  margin-bottom: 0.875rem;
`;
export const AppFormLabel = styled.label`
  font-size: 0.8125rem;
  line-height: 1rem;
  color: var(--light-gray);
  font-weight: 400;

  @media (max-width: 1600px) and (min-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 999px) and (min-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const AppFormInput = styled.input`
  border: none;
  border-radius: 0rem;
  margin-top: 0.3125rem;
  height: 2.6875rem;
  font-weight: 400;
  outline: 0rem;
  color: var(--black);
  border-bottom: 0.09375rem solid var(--light-gray);
  font-size: 1.375rem;

  @media (max-width: 1600px) and (min-width: 1000px) {
    & {
      margin-top: 0.6rem;
    }
  }
`;
export const AppFormButton = styled.button`
  background: var(--primary-color) !important;
  border-color: var(--primary-color);
  font-weight: 500;
  letter-spacing: 0.0625rem;
  border-radius: 0rem;
  font-size: 1rem;
  height: 3.75rem;
  line-height: 1.5625rem;

  @media (max-width: 699px) and (min-width: 300px) {
    height: 3.1rem;
  }
`;
export const AppFormLink = styled(Link)`
  color: var(--black);
  &:hover {
    color: var(--black);
  }
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
`;
