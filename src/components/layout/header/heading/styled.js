import styled from "styled-components";
export const HeadingWrapper = styled.div`
  flex: 0.8;
  padding: 1.4375rem 0rem;
  border-left: 1px solid hsl(0deg 0% 20% / 20%);

  @media (max-width: 599px) and (min-width: 300px) {
    flex: 0.7;
  }
`;
export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  letter-spacing: 0.03em;
  margin: 0rem;
  padding: 0rem 1.375rem;

  @media (max-width: 599px) and (min-width: 300px) {
    font-size: 0.9rem;
  }
`;
