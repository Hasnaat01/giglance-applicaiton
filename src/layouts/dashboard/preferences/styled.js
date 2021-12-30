import styled from "styled-components";

export const PreferencesCard = styled.div`
  padding: 1.25rem;
  & .btn-wrapper {
    margin-top: 3.125rem;

    @media (max-width: 999px) and (min-width: 800px) {
      & {
        margin-top: 2.125rem;
      }
    }
    @media (max-width: 799px) and (min-width: 300px) {
      margin-top: 0rem;

      & .search-filter {
        margin-right: 0rem !important;
        font-size: 0.875rem;
      }
    }
  }
  & .search-filter {
    background: var(--primary-color);
    font-weight: 600;
    border-radius: 0rem;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-transform: uppercase;
    color: var(--white);
    padding: 0.9375rem 1rem;
    margin-right: 1.5rem !important;
  }
`;
export const Title = styled.h1`
  margin-bottom: 1.25rem;
  font-size: 1.5625rem;
`;
