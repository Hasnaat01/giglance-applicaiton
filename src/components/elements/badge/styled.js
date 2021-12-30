import styled from "styled-components";

export const Container = styled.span`
  margin-right: 1rem;
  @media (max-width: 799px) and (min-width: 600px) {
    margin-right
  }
`;
export const Text = styled.p`
  color: #0a70b0;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  margin-bottom: 0.5rem;
  background-color: rgba(10, 112, 176, 0.1);
  padding: 0.5rem 1rem;
  font-weight: normal;
  border-radius: 6.25rem;

  @media (max-width: 799px) and (min-width: 600px) {
    font-size: 0.675rem;
  }
`;
