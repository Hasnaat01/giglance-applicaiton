import React from "react";
import { Badge } from "..";
import { Link } from "react-router-dom";
import {
  Feed,
  FeedDetail,
  Title,
  SubTitle,
  Description,
  FeedRequirement,
  FeedFooter,
  CompanyInfo,
  JobRequirements,
} from "./styled";

export function JobFeed({
  SuggestedJob,
  id,
  title,
  subTitle,
  desc,
  workingType,
  expirence,
  duration,
  companyName,
  companyType,
  requirements,
}) {
  const date = new Date(subTitle).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = new Date(subTitle).toLocaleTimeString();

  return (
    <Link to={`/jobs/${id}`}>
      <Feed SuggestedJob={SuggestedJob}>
        <FeedDetail className="feed-detail">
          <Title className="feed-title">{title}</Title>
          <SubTitle className="feed-sub-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7.34375 3.65625V7.15625L10.3438 8.9375L9.84375 9.78125L6.34375 7.65625V3.65625H7.34375ZM3.21875 10.7812C4.28125 11.8229 5.54167 12.3438 7 12.3438C8.45833 12.3438 9.70833 11.8229 10.75 10.7812C11.8125 9.71875 12.3438 8.45833 12.3438 7C12.3438 5.54167 11.8125 4.29167 10.75 3.25C9.70833 2.1875 8.45833 1.65625 7 1.65625C5.54167 1.65625 4.28125 2.1875 3.21875 3.25C2.17708 4.29167 1.65625 5.54167 1.65625 7C1.65625 8.45833 2.17708 9.71875 3.21875 10.7812ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                fill="#3A3A3A"
              />
            </svg>{" "}
            <span className="date-timeline">
              {date} - {time}
            </span>
          </SubTitle>
          <Description className="feed-desc">
            {desc.replaceAll(`*`, "").replaceAll("#", "").substring(0, 250)}...
          </Description>
          <FeedFooter className="feed-footer">
            <FeedRequirement>
              <span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                  >
                    <path
                      d="M3.27344 13.4648C4.30469 14.4961 5.54688 15.0117 7 15.0117C8.45312 15.0117 9.68359 14.4961 10.6914 13.4648C11.7227 12.4336 12.2383 11.1914 12.2383 9.73828C12.2383 8.28516 11.7227 7.05469 10.6914 6.04688C9.68359 5.01563 8.45312 4.5 7 4.5C5.54688 4.5 4.30469 5.01563 3.27344 6.04688C2.26562 7.05469 1.76172 8.28516 1.76172 9.73828C1.76172 11.1914 2.26562 12.4336 3.27344 13.4648ZM12.2734 5.55469C12.6719 6.07031 13.0117 6.73828 13.293 7.55859C13.5977 8.35547 13.75 9.08203 13.75 9.73828C13.75 11.5898 13.0938 13.1836 11.7812 14.5195C10.4688 15.832 8.875 16.4883 7 16.4883C5.125 16.4883 3.53125 15.832 2.21875 14.5195C0.90625 13.1836 0.25 11.5898 0.25 9.73828C0.25 7.88672 0.90625 6.30469 2.21875 4.99219C3.53125 3.65625 5.125 2.98828 7 2.98828C7.63281 2.98828 8.35938 3.14062 9.17969 3.44531C10.0234 3.75 10.7031 4.10156 11.2188 4.5L12.2734 3.41016C12.6484 3.71484 13 4.06641 13.3281 4.46484L12.2734 5.55469ZM6.26172 10.5117V6.01172H7.73828V10.5117H6.26172ZM9.25 0.738281V2.25H4.75V0.738281H9.25Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                </span>
                <span>Working type</span>
              </span>
              <span className="highlighted">{workingType}</span>
            </FeedRequirement>
            <FeedRequirement>
              <span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 11.9375L3.35938 14.75L4.58984 9.47656L0.511719 5.92578L5.89062 5.46875L8 0.511719L10.1094 5.46875L15.4883 5.92578L11.4102 9.47656L12.6406 14.75L8 11.9375Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                </span>
                <span>Experience</span>
              </span>
              <span className="highlighted">{expirence}</span>
            </FeedRequirement>{" "}
            <FeedRequirement>
              <span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    <path
                      d="M12.2383 14.0117V5.75H1.76172V14.0117H12.2383ZM12.2383 1.98828C12.6367 1.98828 12.9883 2.14062 13.293 2.44531C13.5977 2.75 13.75 3.10156 13.75 3.5V14.0117C13.75 14.4102 13.5977 14.7617 13.293 15.0664C12.9883 15.3477 12.6367 15.4883 12.2383 15.4883H1.76172C1.33984 15.4883 0.976562 15.3477 0.671875 15.0664C0.390625 14.7852 0.25 14.4336 0.25 14.0117V3.5C0.25 3.10156 0.390625 2.75 0.671875 2.44531C0.976562 2.14062 1.33984 1.98828 1.76172 1.98828H2.5V0.511719H4.01172V1.98828H9.98828V0.511719H11.5V1.98828H12.2383ZM10.7617 7.26172V8.73828H9.25V7.26172H10.7617ZM7.73828 7.26172V8.73828H6.26172V7.26172H7.73828ZM4.75 7.26172V8.73828H3.23828V7.26172H4.75Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                </span>
                <span>Duration</span>
              </span>
              <span className="highlighted">{duration}</span>
            </FeedRequirement>
          </FeedFooter>
        </FeedDetail>

        <CompanyInfo className="company-info">
          <Title className="company-title">{companyName}</Title>
          <SubTitle className="company-subTitle">{companyType}</SubTitle>

          {/* Badges */}

          <JobRequirements className="job-requirements">
            {requirements.map(({ id, reqName }) => (
              <Badge className="badge" id={id}>
                {reqName}
              </Badge>
            ))}
          </JobRequirements>
        </CompanyInfo>
      </Feed>
    </Link>
  );
}
