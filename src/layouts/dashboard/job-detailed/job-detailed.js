import React, { useContext, useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import { useParams, useLocation } from "react-router-dom";
import UseFetch from "../../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import { db, firebase } from "../../../lib/firebase";

import { Badge } from "../../../components/elements/badge/badge";
import { Button } from "../../../components/elements/button/button";

import {
  JobDetailedSection,
  Wrapper,
  PostDate,
  CardTextWrapper,
  CompanyName,
  JobTitle,
  Badges,
  Heading,
  Text,
} from "./styled";
import { SuggestedJob } from "./suggested-job";
import { Input } from "../../../components";
import { UserContext } from "../../../context/user";

export function JobDetailedLayout() {
  const { REACT_APP_SITE_URL } = process.env;

  const [savedJobs, setSavedJobs] = useState([]);
  const [userId, setUserId] = useState("");

  const { user } = useContext(UserContext);
  const userInfo = user;
  const userDocumentId = user.userId;

  const { pathname } = useLocation();
  const id = pathname.replace("/jobs", "job-listings");
  const { loading, data, error } = UseFetch(`${REACT_APP_SITE_URL}${id}`);

  useEffect(() => {
    db.collection("users")
      .doc(userInfo.userId)
      .collection("savedJobs")
      .onSnapshot((ss) => setSavedJobs(ss.docs));
  }, []);

  const savedJobCheckerId = pathname.replace("/jobs/", "");
  function savedJobChecker(job) {
    return job.data().id == savedJobCheckerId;
  }

  const confirmedSavedJob = savedJobs.find(savedJobChecker);

  // This func will run when user click on fav (heart) icon
  const favJobHandler = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(userDocumentId)
      .collection("savedJobs")
      .add({
        ...data,
      });
  };

  // remove saved job
  const removeSavedJobHandler = () => {
    const query = firebase
      .firestore()
      .collection("users")
      .doc(userInfo.userId)
      .collection("savedJobs")
      .where("id", "==", parseInt(savedJobCheckerId));

    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
  };

  // This func run when user want to share the job
  const shareJobHandler = () => {
    const jobLink = {
      border: "1px solid var(--light-gray)",
      color: "#5b5b5b",
      fontSize: "14px",
      padding: "20px 15px",
    };
    swal(
      <div>
        <h1 className="modal-heading">Job link!</h1>
        <p>Copy this link</p>
        <Input
          className="form-control"
          id="job-link"
          value={window.location.href}
          style={jobLink}
          disabled
        />
      </div>
    );
  };

  if (loading) {
    return (
      <JobDetailedSection>
        <Wrapper>
          <b>Loading...</b>
        </Wrapper>
      </JobDetailedSection>
    );
  }

  if (data.length < 1 || data == undefined) {
    return (
      <JobDetailedSection>
        <Wrapper>
          <b>No job found...</b>
        </Wrapper>
      </JobDetailedSection>
    );
  } else {
    const date = new Date(data.dateortime).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = new Date(data.dateortime).toLocaleTimeString();
    return (
      <React.Fragment>
        <JobDetailedSection>
          <Wrapper>
            <PostDate>
              {/* Post date */}Posted on {date} - {time}
            </PostDate>
            <React.Fragment>
              <div className="card-header">
                <CardTextWrapper>
                  <CompanyName>{data.companyName}</CompanyName>
                  <JobTitle>
                    {/* Job title */}
                    {data.title}
                  </JobTitle>
                  <Badges>
                    {/* Badges */}
                    <Badge>{data.working_type.name}</Badge>
                    <Badge>{data.experience_type.name}</Badge>
                    <Badge>{data.Availability}</Badge>
                  </Badges>
                </CardTextWrapper>
                <hr />
                <CardTextWrapper>
                  <Button btnPrimary className="btn customBtn">
                    APPLY FOR JOB
                  </Button>
                  {/* Heart icon */}

                  {confirmedSavedJob ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      id="heart"
                      onClick={removeSavedJobHandler}
                    >
                      <rect
                        width="44"
                        height="44"
                        rx="22"
                        fill="#DF457C"
                        fill-opacity="1"
                      />
                      <path
                        d="M22.0938 28.5625C23.5938 27.2188 24.7031 26.2031 25.4219 25.5156C26.1406 24.8281 26.9219 24.0156 27.7656 23.0781C28.6094 22.1406 29.1875 21.3125 29.5 20.5938C29.8438 19.875 30.0156 19.1719 30.0156 18.4844C30.0156 17.4844 29.6719 16.6562 28.9844 16C28.3281 15.3438 27.5 15.0156 26.5 15.0156C25.7188 15.0156 24.9844 15.2344 24.2969 15.6719C23.6406 16.1094 23.1875 16.6719 22.9375 17.3594H21.0625C20.8125 16.6719 20.3438 16.1094 19.6562 15.6719C19 15.2344 18.2812 15.0156 17.5 15.0156C16.5 15.0156 15.6562 15.3438 14.9688 16C14.3125 16.6562 13.9844 17.4844 13.9844 18.4844C13.9844 19.1719 14.1406 19.875 14.4531 20.5938C14.7969 21.3125 15.3906 22.1406 16.2344 23.0781C17.0781 24.0156 17.8594 24.8281 18.5781 25.5156C19.2969 26.2031 20.4062 27.2188 21.9062 28.5625L22 28.6562L22.0938 28.5625ZM26.5 13C28.0625 13 29.3594 13.5312 30.3906 14.5938C31.4531 15.6562 31.9844 16.9531 31.9844 18.4844C31.9844 19.3906 31.8125 20.2812 31.4688 21.1562C31.125 22 30.4844 22.9531 29.5469 24.0156C28.6406 25.0781 27.8125 25.9688 27.0625 26.6875C26.3125 27.4062 25.1094 28.5156 23.4531 30.0156L22 31.3281L20.5469 30.0625C18.3906 28.125 16.8281 26.6719 15.8594 25.7031C14.9219 24.7344 14.0469 23.5938 13.2344 22.2812C12.4219 20.9688 12.0156 19.7031 12.0156 18.4844C12.0156 16.9531 12.5312 15.6562 13.5625 14.5938C14.625 13.5312 15.9375 13 17.5 13C19.3125 13 20.8125 13.7031 22 15.1094C23.1875 13.7031 24.6875 13 26.5 13Z"
                        className="heart-icon"
                        fill="#fff"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      id="heart"
                      onClick={favJobHandler}
                    >
                      <rect
                        width="44"
                        height="44"
                        rx="22"
                        fill="#DF457C"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M22.0938 28.5625C23.5938 27.2188 24.7031 26.2031 25.4219 25.5156C26.1406 24.8281 26.9219 24.0156 27.7656 23.0781C28.6094 22.1406 29.1875 21.3125 29.5 20.5938C29.8438 19.875 30.0156 19.1719 30.0156 18.4844C30.0156 17.4844 29.6719 16.6562 28.9844 16C28.3281 15.3438 27.5 15.0156 26.5 15.0156C25.7188 15.0156 24.9844 15.2344 24.2969 15.6719C23.6406 16.1094 23.1875 16.6719 22.9375 17.3594H21.0625C20.8125 16.6719 20.3438 16.1094 19.6562 15.6719C19 15.2344 18.2812 15.0156 17.5 15.0156C16.5 15.0156 15.6562 15.3438 14.9688 16C14.3125 16.6562 13.9844 17.4844 13.9844 18.4844C13.9844 19.1719 14.1406 19.875 14.4531 20.5938C14.7969 21.3125 15.3906 22.1406 16.2344 23.0781C17.0781 24.0156 17.8594 24.8281 18.5781 25.5156C19.2969 26.2031 20.4062 27.2188 21.9062 28.5625L22 28.6562L22.0938 28.5625ZM26.5 13C28.0625 13 29.3594 13.5312 30.3906 14.5938C31.4531 15.6562 31.9844 16.9531 31.9844 18.4844C31.9844 19.3906 31.8125 20.2812 31.4688 21.1562C31.125 22 30.4844 22.9531 29.5469 24.0156C28.6406 25.0781 27.8125 25.9688 27.0625 26.6875C26.3125 27.4062 25.1094 28.5156 23.4531 30.0156L22 31.3281L20.5469 30.0625C18.3906 28.125 16.8281 26.6719 15.8594 25.7031C14.9219 24.7344 14.0469 23.5938 13.2344 22.2812C12.4219 20.9688 12.0156 19.7031 12.0156 18.4844C12.0156 16.9531 12.5312 15.6562 13.5625 14.5938C14.625 13.5312 15.9375 13 17.5 13C19.3125 13 20.8125 13.7031 22 15.1094C23.1875 13.7031 24.6875 13 26.5 13Z"
                        className="heart-icon"
                        fill="#DF457C"
                      />
                    </svg>
                  )}

                  {/* Share icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    onClick={shareJobHandler}
                  >
                    <rect
                      width="44"
                      height="44"
                      rx="22"
                      fill="#2A85BE"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M27 26.0781C27.8125 26.0781 28.5 26.375 29.0625 26.9688C29.625 27.5312 29.9062 28.2031 29.9062 28.9844C29.9062 29.7969 29.6094 30.5 29.0156 31.0938C28.4531 31.6562 27.7812 31.9375 27 31.9375C26.2188 31.9375 25.5312 31.6562 24.9375 31.0938C24.375 30.5 24.0938 29.7969 24.0938 28.9844C24.0938 28.6719 24.1094 28.4531 24.1406 28.3281L17.0625 24.2031C16.4688 24.7344 15.7812 25 15 25C14.1875 25 13.4844 24.7031 12.8906 24.1094C12.2969 23.5156 12 22.8125 12 22C12 21.1875 12.2969 20.4844 12.8906 19.8906C13.4844 19.2969 14.1875 19 15 19C15.7812 19 16.4688 19.2656 17.0625 19.7969L24.0938 15.7188C24.0312 15.4062 24 15.1719 24 15.0156C24 14.2031 24.2969 13.5 24.8906 12.9062C25.4844 12.3125 26.1875 12.0156 27 12.0156C27.8125 12.0156 28.5156 12.3125 29.1094 12.9062C29.7031 13.5 30 14.2031 30 15.0156C30 15.8281 29.7031 16.5312 29.1094 17.125C28.5156 17.7188 27.8125 18.0156 27 18.0156C26.25 18.0156 25.5625 17.7344 24.9375 17.1719L17.9062 21.2969C17.9688 21.6094 18 21.8438 18 22C18 22.1562 17.9688 22.3906 17.9062 22.7031L25.0312 26.8281C25.5938 26.3281 26.25 26.0781 27 26.0781Z"
                      fill="#0A70B0"
                    />
                  </svg>
                </CardTextWrapper>
              </div>

              <CardTextWrapper className="card-body-wrapper">
                {/* Content */}
                <React.Fragment>
                  <ReactMarkdown>{data.description}</ReactMarkdown>
                </React.Fragment>

                {/* App for job */}
                <React.Fragment>
                  <CardTextWrapper className="apply-for-job">
                    <Button btnPrimary className="btn customBtn">
                      APPLY FOR JOB
                    </Button>
                    {/* Heart icon */}
                    {confirmedSavedJob ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        id="heart"
                        onClick={removeSavedJobHandler}
                      >
                        <rect
                          width="44"
                          height="44"
                          rx="22"
                          fill="#DF457C"
                          fill-opacity="1"
                        />
                        <path
                          d="M22.0938 28.5625C23.5938 27.2188 24.7031 26.2031 25.4219 25.5156C26.1406 24.8281 26.9219 24.0156 27.7656 23.0781C28.6094 22.1406 29.1875 21.3125 29.5 20.5938C29.8438 19.875 30.0156 19.1719 30.0156 18.4844C30.0156 17.4844 29.6719 16.6562 28.9844 16C28.3281 15.3438 27.5 15.0156 26.5 15.0156C25.7188 15.0156 24.9844 15.2344 24.2969 15.6719C23.6406 16.1094 23.1875 16.6719 22.9375 17.3594H21.0625C20.8125 16.6719 20.3438 16.1094 19.6562 15.6719C19 15.2344 18.2812 15.0156 17.5 15.0156C16.5 15.0156 15.6562 15.3438 14.9688 16C14.3125 16.6562 13.9844 17.4844 13.9844 18.4844C13.9844 19.1719 14.1406 19.875 14.4531 20.5938C14.7969 21.3125 15.3906 22.1406 16.2344 23.0781C17.0781 24.0156 17.8594 24.8281 18.5781 25.5156C19.2969 26.2031 20.4062 27.2188 21.9062 28.5625L22 28.6562L22.0938 28.5625ZM26.5 13C28.0625 13 29.3594 13.5312 30.3906 14.5938C31.4531 15.6562 31.9844 16.9531 31.9844 18.4844C31.9844 19.3906 31.8125 20.2812 31.4688 21.1562C31.125 22 30.4844 22.9531 29.5469 24.0156C28.6406 25.0781 27.8125 25.9688 27.0625 26.6875C26.3125 27.4062 25.1094 28.5156 23.4531 30.0156L22 31.3281L20.5469 30.0625C18.3906 28.125 16.8281 26.6719 15.8594 25.7031C14.9219 24.7344 14.0469 23.5938 13.2344 22.2812C12.4219 20.9688 12.0156 19.7031 12.0156 18.4844C12.0156 16.9531 12.5312 15.6562 13.5625 14.5938C14.625 13.5312 15.9375 13 17.5 13C19.3125 13 20.8125 13.7031 22 15.1094C23.1875 13.7031 24.6875 13 26.5 13Z"
                          className="heart-icon"
                          fill="#fff"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        id="heart"
                        onClick={favJobHandler}
                      >
                        <rect
                          width="44"
                          height="44"
                          rx="22"
                          fill="#DF457C"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M22.0938 28.5625C23.5938 27.2188 24.7031 26.2031 25.4219 25.5156C26.1406 24.8281 26.9219 24.0156 27.7656 23.0781C28.6094 22.1406 29.1875 21.3125 29.5 20.5938C29.8438 19.875 30.0156 19.1719 30.0156 18.4844C30.0156 17.4844 29.6719 16.6562 28.9844 16C28.3281 15.3438 27.5 15.0156 26.5 15.0156C25.7188 15.0156 24.9844 15.2344 24.2969 15.6719C23.6406 16.1094 23.1875 16.6719 22.9375 17.3594H21.0625C20.8125 16.6719 20.3438 16.1094 19.6562 15.6719C19 15.2344 18.2812 15.0156 17.5 15.0156C16.5 15.0156 15.6562 15.3438 14.9688 16C14.3125 16.6562 13.9844 17.4844 13.9844 18.4844C13.9844 19.1719 14.1406 19.875 14.4531 20.5938C14.7969 21.3125 15.3906 22.1406 16.2344 23.0781C17.0781 24.0156 17.8594 24.8281 18.5781 25.5156C19.2969 26.2031 20.4062 27.2188 21.9062 28.5625L22 28.6562L22.0938 28.5625ZM26.5 13C28.0625 13 29.3594 13.5312 30.3906 14.5938C31.4531 15.6562 31.9844 16.9531 31.9844 18.4844C31.9844 19.3906 31.8125 20.2812 31.4688 21.1562C31.125 22 30.4844 22.9531 29.5469 24.0156C28.6406 25.0781 27.8125 25.9688 27.0625 26.6875C26.3125 27.4062 25.1094 28.5156 23.4531 30.0156L22 31.3281L20.5469 30.0625C18.3906 28.125 16.8281 26.6719 15.8594 25.7031C14.9219 24.7344 14.0469 23.5938 13.2344 22.2812C12.4219 20.9688 12.0156 19.7031 12.0156 18.4844C12.0156 16.9531 12.5312 15.6562 13.5625 14.5938C14.625 13.5312 15.9375 13 17.5 13C19.3125 13 20.8125 13.7031 22 15.1094C23.1875 13.7031 24.6875 13 26.5 13Z"
                          className="heart-icon"
                          fill="#DF457C"
                        />
                      </svg>
                    )}

                    {/* Share icon */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      onClick={shareJobHandler}
                    >
                      <rect
                        width="44"
                        height="44"
                        rx="22"
                        fill="#2A85BE"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M27 26.0781C27.8125 26.0781 28.5 26.375 29.0625 26.9688C29.625 27.5312 29.9062 28.2031 29.9062 28.9844C29.9062 29.7969 29.6094 30.5 29.0156 31.0938C28.4531 31.6562 27.7812 31.9375 27 31.9375C26.2188 31.9375 25.5312 31.6562 24.9375 31.0938C24.375 30.5 24.0938 29.7969 24.0938 28.9844C24.0938 28.6719 24.1094 28.4531 24.1406 28.3281L17.0625 24.2031C16.4688 24.7344 15.7812 25 15 25C14.1875 25 13.4844 24.7031 12.8906 24.1094C12.2969 23.5156 12 22.8125 12 22C12 21.1875 12.2969 20.4844 12.8906 19.8906C13.4844 19.2969 14.1875 19 15 19C15.7812 19 16.4688 19.2656 17.0625 19.7969L24.0938 15.7188C24.0312 15.4062 24 15.1719 24 15.0156C24 14.2031 24.2969 13.5 24.8906 12.9062C25.4844 12.3125 26.1875 12.0156 27 12.0156C27.8125 12.0156 28.5156 12.3125 29.1094 12.9062C29.7031 13.5 30 14.2031 30 15.0156C30 15.8281 29.7031 16.5312 29.1094 17.125C28.5156 17.7188 27.8125 18.0156 27 18.0156C26.25 18.0156 25.5625 17.7344 24.9375 17.1719L17.9062 21.2969C17.9688 21.6094 18 21.8438 18 22C18 22.1562 17.9688 22.3906 17.9062 22.7031L25.0312 26.8281C25.5938 26.3281 26.25 26.0781 27 26.0781Z"
                        fill="#0A70B0"
                      />
                    </svg>
                  </CardTextWrapper>
                </React.Fragment>
              </CardTextWrapper>
            </React.Fragment>
            <Text className="flag-txt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  opacity="0.6"
                  d="M7.79297 2.5H12.0117V9.98828H6.73828L6.45703 8.51172H2.23828V13.75H0.761719V0.988281H7.51172L7.79297 2.5Z"
                  fill="#3A3A3A"
                />
              </svg>{" "}
              Not what you are looking for?
            </Text>
          </Wrapper>
        </JobDetailedSection>

        <SuggestedJob />
      </React.Fragment>
    );
  }
}
