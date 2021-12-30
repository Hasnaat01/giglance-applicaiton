import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardSidebar = styled.div`
  position: relative;
  height: calc(100vh - 4.5rem);
  flex: 0.2 1;

  @media (max-width: 799px) and (min-width: 300px) {
    position: absolute;
    background: white;
    width: 250px;
    z-index: 10000;
    border-right: 1px solid hsl(0deg 0% 20% / 20%);

    &#dashboard-sdebar {
      display: none;
    }
  }
  @media (max-width: 3000px) and (min-width: 800px) {
    &#dashboard-sdebar {
      display: block !important;
    }
  }
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
export const CommunityTab = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
`;
export const CloseIcon = styled.div`
  & {
    margin-bottom: 2rem;

    @media (max-width: 3000px) and (min-width: 800px) {
      display: none;
    }
  }

  & svg {
    position: absolute;
    right: 1.1rem;
    top: 1.1rem;

    &:hover {
      fill: #0a70b0;
    }
  }
`;
