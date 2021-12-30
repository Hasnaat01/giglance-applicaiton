import React from "react";
import GlobalStyles from "../../assets/styles/globalStyles";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import {
  AppWrapper,
  DashboardWrapper,
  ContentWrapper,
  Content,
  SidebarOpenIconWrapper,
  MenuOrFilterWrapper,
} from "./styled";
import { FilterBtnWrapper } from "../../layouts/dashboard/job-listings/job-filter/styled";

// Icons
import { IoMenu, IoFilter } from "react-icons/io5";

// Components
import { Button } from "../elements/button";

export const Layout = ({
  header,
  heading,
  sidebar,
  jobPosts,
  JobDetail,
  preferences,
  authentication,
  profile,
  children,
}) => {
  const openSidebar = (e) => {
    e.preventDefault();
    document.getElementById("dashboard-sdebar").style.display = "block";
  };

  const ToggleFilterBox = (e) => {
    e.preventDefault();
    document
      .getElementById("job-filter-box")
      .classList.toggle("mb-job-filter-box");
  };

  return (
    <AppWrapper>
      <GlobalStyles />
      {header && <Header heading={heading} />}
      {/* <Dashboard Wrapper> */}
      <DashboardWrapper dashboard={sidebar}>
        {sidebar && <Sidebar communityTab />}
        {(jobPosts ||
          JobDetail ||
          preferences ||
          authentication ||
          profile) && (
          <ContentWrapper JobDetailPage={JobDetail}>
            <Content
              JobDetailPage={JobDetail}
              authenticationPages={authentication}
              profilePage={profile}
            >
              {jobPosts || preferences ? (
                <MenuOrFilterWrapper>
                  <SidebarOpenIconWrapper
                    className="sidebar-icon"
                    onClick={openSidebar}
                  >
                    <IoMenu />
                  </SidebarOpenIconWrapper>
                </MenuOrFilterWrapper>
              ) : null}

              {children}
            </Content>
          </ContentWrapper>
        )}
      </DashboardWrapper>
    </AppWrapper>
  );
};
