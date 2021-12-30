import styled from "styled-components";

export const JobFilterWrapper = styled.div`
  ${(props) =>
    props.preferences
      ? `border-bottom: none`
      : `border-bottom: 1px solid hsl(0deg 0% 20% / 20%);`}

  padding-bottom: 2rem;

  & .job-filter-fields {
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    margin-bottom: 1rem;
    column-gap: 1.9375rem !important;

    &:nth-child(3) {
      margin-bottom: 0rem;
    }

    & .job-filter-dropdown {
      width: 100% !important;
    }

    @media (max-width: 799px) and (min-width: 300px) {
      display: flex;
      flex-direction: column;
      row-gap: 0.75rem;
    }
  }

  @media (max-width: 3000px) and (min-width: 800px) {
    &.mb-job-filter-box {
      display: block !important;
    }
  }

  @media (max-width: 799px) and (min-width: 300px) {
    padding: 1.25rem;
    background: white;
    &.mb-job-filter-box {
      display: none;
    }
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(58, 58, 58, 0.2);
  font-weight: normal;
  padding-right: 1.2rem;
  width: 100%;
  height: 2.8125rem;
  overflow: hidden;

  & .search-job-inp {
    border: none;
    color: #777777;
    margin: 0;
    padding: 0;
  }
`;
export const SearchIcon = styled.span`
  padding: 0.75rem;
  display: flex;
`;
export const SearchFilterBtn = styled.button`
  width: 100%;
  background-color: #0a70b0;
  box-sizing: border-box;
  border-radius: 0rem;

  height: 2.625rem;
  border: 0.1rem solid #0a70b0;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  text-transform: initial;

  & .search-filter {
    color: white;
    text-decoration: none;
  }

  &:click {
    border: none;
    border-radius: 0px;
  }
`;

export const FilterBtnWrapper = styled.div``;
