import styled from "styled-components";

export const IconLists = styled.div`
  height: 2.6875rem;
  &.active {
    background: #0a70b0;
  }
  &.active svg path {
    fill: white !important;
  }
  &.active .list-title {
    color: white;
  }
  & svg {
    font-size: 1.125rem;
    width: 100%;
    height: 100%;
  }
  &.communityTab {
    background-color: #e6f1f7;
  }
  & #launch {
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;

    position: relative;
    left: 0.5rem;
  }
`;
export const List = styled.div`
  padding: 0.6875rem 2rem;
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
  align-items: center;
  height: 2.6875rem;
`;
export const Icon = styled.span`
  width: 1.125rem;
  position: relative;
  bottom: 0.0625rem;
`;
export const Text = styled.span`
  font-size: 0.875rem;
  color: var(--black);
`;
