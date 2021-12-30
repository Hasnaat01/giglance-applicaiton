import React, { useState, useEffect, useContext } from "react";
import { JobFeed } from "../../../../components";
import { UserContext } from "../../../../context/user";
import UseFetch from "../../../../hooks/useFetch";

import "./styles.css";

export function SuggestedJob() {
  const { REACT_APP_SITE_URL } = process.env;
  const currentJobID = window.location.pathname.replace("/jobs/", "");
  const { user } = useContext(UserContext);
  const userInfo = user;

  const { loading, data, error } = UseFetch(
    `${REACT_APP_SITE_URL}job-listings`
  );
  const suggestedJob = [];
  let dataArr = Array.from(data);
  let jobs = dataArr.map((job) => {
    if (userInfo.jobCategories === job.job_category.name) {
      if (job.id != currentJobID) {
        return job;
      }
    }
  });

  let job = jobs.filter(function (element) {
    return element !== undefined;
  });

  console.log(job);

  if (loading) {
    return "Loading";
  }

  return (
    <div className="suggested-job-bg job-feeds">
      <div className="inner">
        <h2 className="heading">Suggested for you</h2>

        <>
          <JobFeed
            key={job[1].id}
            id={job[1].id}
            title={job[1].title}
            subTitle={job[1].dateortime}
            desc={job[1].description}
            workingType={job[1].working_type.name}
            expirence={job[1].experience_type.name}
            duration={job[1].duration.name}
            companyName={job[1].companyName}
            companyType={job[1].companyType}
            requirements={[
              { id: 1, reqName: job[1].Location },
              { id: 2, reqName: job[1].Availability },
              {
                id: 3,
                reqName: job[1].job_category.name,
              },
            ]}
            SuggestedJob
          />
        </>
      </div>
    </div>
  );
}
