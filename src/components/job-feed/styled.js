import styled from "styled-components";

export const Feed = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: space-between;
  ${(props) =>
    props.SuggestedJob
      ? `border-bottom: 0px`
      : `border-bottom: 1px solid hsl(0deg 0% 20% / 20%);`}
`;
export const FeedDetail = styled.div`
  flex: 0.7;
  max-width: 42rem;

  @media (max-width: 799px) and (min-width: 300px) {
    flex: 1;
  }
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  margin-bottom: 0.5rem;
  color: var(--black);
`;
export const SubTitle = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--black);
  margin-bottom: 1rem;

  & svg {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    margin-right: 0.625rem;
  }

  @media (max-width: 999px) and (min-width: 800px) {
    & .date-timeline {
      font-weight: 500;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 799px) and (min-width: 300px) {
    &.feed-sub-title {
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;
export const Description = styled.p`
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  color: var(--light-gray);

  @media (max-width: 999px) and (min-width: 800px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  @media (max-width: 799px) and (min-width: 300px) {
    font-size: 0.8125rem;
  }
`;
export const FeedFooter = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2.25rem;

  @media (max-width: 799px) and (min-width: 300px) {
    flex-direction: column;
  }
`;
export const FeedRequirement = styled.p`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  font-weight: 500;
  color: #3a3a3a;

  & .icon {
    position: relative;
    bottom: 0.125rem;
    margin-right: 0.5rem;

    & svg {
      width: 1.125rem;
    }
  }

  & .highlighted {
    color: var(--primary-color);
  }

  @media (max-width: 999px) and (min-width: 800px) {
    & {
      align-items: center;
    }
  }
`;

export const CompanyInfo = styled.div`
  flex: 0.3;

  & .company-title {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.375rem;
  }
  & .company-subTitle {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
  }

  @media (max-width: 799px) and (min-width: 300px) {
    display: none;
  }
`;
export const JobRequirements = styled.div`
  margin-top: 1.5rem !important;
`;
