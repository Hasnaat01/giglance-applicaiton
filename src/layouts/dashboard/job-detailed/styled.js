import styled from "styled-components";

export const JobDetailedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 46.875rem;

  & .card-header {
    border-radius: 0rem;
    border: 0.1px solid hsl(0deg 0% 20% / 20%);
    padding: 0rem;
    background: white;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 799px) and (min-width: 600px) {
    width: 33.875rem;
  }
  @media (max-width: 599px) and (min-width: 300px) {
    width: 22.875rem;
  }
`;
export const PostDate = styled.p`
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: #3a3a3a;
  opacity: 0.6;
  margin-bottom: 0.625rem;
`;

export const CardTextWrapper = styled.div`
  padding: 3.125rem;

  &.card-body-wrapper {
    border: 0.1px solid hsl(0deg 0% 20% / 20%);
  }

  &.apply-for-job {
    padding-right: 0rem;
    padding-left: 0rem;
    padding-bottom: 0rem;
  }

  & svg {
    &.heart-icon-box {
      background: rgb(232 73 130) !important;
      border-radius: 100px;
      fill: rgb(232 73 130) !important;

      & path {
        fill: #fff;
      }
    }
  }

  & #heart {
    margin-right: 0.625rem;
  }
  & #second_heart {
    margin-right: 0.625rem;
  }

  & ul,
  li {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.75rem;
    color: #3a3a3a;

    @media (max-width: 599px) and (min-width: 300px) {
      font-size: 0.8rem;
      line-height: 1.5rem;
      margin-left: 5px;
    }
  }

  & .customBtn {
    width: 10.125rem;
    background: var(--primary-color);
    font-weight: 600;
    border-radius: 0rem;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-transform: uppercase;
    color: var(--white);
    padding: 0.9375rem 1rem;
    margin-right: 1.5rem !important;

    @media (max-width: 999px) and (min-width: 800px) {
      font-size: 1rem;
    }

    @media (max-width: 799px) and (min-width: 600px) {
      font-size: 0.8rem;
      letter-spacing: 0.4px;
      word-spacing: 2px;
      padding: 0.8rem;
    }

    @media (max-width: 599px) and (min-width: 300px) {
      font-size: 0.7rem;
      padding: 0.7rem;
      width: 126px;
      margin-right: 1rem !important;
    }
  }

  @media (max-width: 799px) and (min-width: 600px) {
    padding: 2.125rem;
  }
  @media (max-width: 599px) and (min-width: 300px) {
    padding: 1.125rem;
  }

  @media (max-width: 999px) and (min-width: 800px) {
    & svg {
      width: 3.125rem;
    }
  }
  @media (max-width: 599px) and (min-width: 300px) {
    & svg {
      width: 40px;
    }
  }
`;

export const CompanyName = styled.p`
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #3a3a3a;
  opacity: 0.6;
  margin-bottom: 0.5rem;

  @media (max-width: 599px) and (min-width: 300px) {
    font-size: 0.8rem;
  }
`;

export const JobTitle = styled.h1`
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 3.0625rem;
  color: #3a3a3a;
  margin-bottom: 1rem;

  @media (max-width: 799px) and (min-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 599px) and (min-width: 300px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export const Badges = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 599px) and (min-width: 300px) {
    flex-wrap: wrap;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: var(--primary-color);
  margin-bottom: 0.375rem;
`;
export const Text = styled.p`
  &.flag-txt {
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    color: #3a3a3a;
    opacity: 0.6;
    margin-top: 0.625rem !important;
  }
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #3a3a3a;

  @media (max-width: 599px) and (min-width: 300px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;
