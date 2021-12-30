import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const DashboardWrapper = styled.main`
  ${(props) =>
    props.dashboard &&
    `
        display: flex;
        flex-direction: row;
        

        @media (max-width: 799px) and (min-width: 300px) {
          position: relative;
        }
    `}
`;
export const ContentWrapper = styled.div`
  flex: 0.8 1;
  border-left: 1px solid hsl(0deg 0% 20% / 20%);
  height: 100vh;
  overflow-y: none;

  @media (max-width: 799px) and (min-width: 300px) {
    border: none;
    flex: 1;
  }
`;
export const Content = styled.div`
  ${(props) =>
    props.authenticationPages
      ? `padding: 0rem;overflow-y: none;`
      : `padding: 2rem;overflow-y: scroll;
    
    `};

  height: 100vh;
  padding-bottom: 8.125rem !important;
  ${(props) =>
    props.JobDetailPage &&
    `
    padding: 0rem;
    padding-top: 2rem;
    overflow-y: scroll;
    padding-bottom: 0rem !important;
    `};

  ${(props) =>
    props.profilePage &&
    `
    padding: 2rem 9.375rem 5.0625rem 9.375rem;
    @media (max-width: 799px) and (min-width: 300px) {
      padding: 1.25rem !important;
      padding-bottom: 7rem !important;
    }
    `}

  & .sidebar-icon {
    @media (max-width: 3000px) and (min-width: 800px) {
      display: none;
    }
  }
`;

export const SidebarOpenIconWrapper = styled.div`
  margin-bottom: 0rem;

  & svg {
    font-size: 1.3rem;

    &:hover {
      fill var(--primary-color)
    }
  }
`;
export const MenuOrFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  & #filter-btn {
    padding: 6px 18px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
  }

  @media (max-width: 3000px) and (min-width: 800px) {
    display: none;
  }
`;
