import React from "react";
import { Icon, IconLists, List, Text } from "./styled";

export function IconListTab({ icon, txt, communityTab, activeTab }) {
  return (
    <React.Fragment>
      <IconLists
        className={`icon-lists ${
          window.location.pathname === activeTab
            ? "active"
            : communityTab
            ? "communityTab"
            : ""
        }`}
      >
        <List>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path d={icon} fill="#3A3A3A" />
            </svg>
          </Icon>
          <Text className="list-title">
            {txt}{" "}
            {communityTab ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                id="launch"
              >
                <path
                  d="M7.17578 0.75H11.25V4.82422H10.0742V2.74609L4.35938 8.46094L3.53906 7.64062L9.25391 1.92578H7.17578V0.75ZM10.0742 10.0742V6H11.25V10.0742C11.25 10.3841 11.1315 10.6576 10.8945 10.8945C10.6576 11.1315 10.3841 11.25 10.0742 11.25H1.92578C1.59766 11.25 1.3151 11.1406 1.07812 10.9219C0.859375 10.6849 0.75 10.4023 0.75 10.0742V1.92578C0.75 1.59766 0.859375 1.32422 1.07812 1.10547C1.3151 0.86849 1.59766 0.75 1.92578 0.75H6V1.92578H1.92578V10.0742H10.0742Z"
                  fill="#3A3A3A"
                />
              </svg>
            ) : null}
          </Text>
        </List>
      </IconLists>
    </React.Fragment>
  );
}
