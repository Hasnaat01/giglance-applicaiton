import styled from "styled-components";

export const SiteBrandWrapper = styled.div`
  flex: 0.2;
  align-items: center;
  text-align: center;
  padding: 1rem 0rem;
  height: 100%;

  @media (max-width: 599px) and (min-width: 300px) {
    flex: 0.3;
  }
`;
export const SiteBrand = styled.img`
  width: 7.9375rem;

  @media (max-width: 599px) and (min-width: 300px) {
    width: 4.9375rem;
  }
`;
