import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Label = styled.label`
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: var(--light-gray);
  font-weight: 400;
  display: inline-block;
`;
export const Field = styled.input`
  border: none;
  border-radius: 0rem;
  margin-top: 0.5rem;
  height: 2.6875rem;
  font-weight: 400;
  outline: none;
  color: var(--black);

  border-bottom: 0.09375rem solid var(--light-gray);
  font-size: 0.875rem;

  &#edit-input {
    border: none;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    margin: 0rem;
    height: 3.5rem;
    padding: 1rem 0.9375rem;
  }

  &:focus {
    box-shadow: none;
  }
`;
export const InputWrapper = styled.div`
  ${(props) =>
    props.visaCard &&
    `

    display: flex;
    flex-direction: row;
    border: 1px solid #e5e5e5;
    padding: 0rem 1rem;
    align-items: center;@media (max-width: 799px) and (min-width: 600px) {
      height: 3rem;
      overflow: hidden;
    }
    `}

  & #icon-input-field {
    height: 3.5rem;
    padding: 1rem 1rem;

    width: 100%;
    background: #ffffff;
    border: none;
    margin: 0px;
  }

  &#edit-input-wrapper {
    width: 18.75rem;
    column-gap: 0rem;
    border: 1px solid #e5e5e5;
  }
`;
