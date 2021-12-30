import React, { useContext, useEffect, useState } from "react";
import UseFetch from "../../../hooks/useFetch";

import { JobFeed } from "../../../components";
import { UserContext } from "../../../context/user";

export function JobListingsLayout() {
  const { REACT_APP_SITE_URL } = process.env;

  const [loader, setLoader] = useState(true);

  const { user } = useContext(UserContext);
  const userInfo = user;
  const { loading, data, error } = UseFetch(
    `${REACT_APP_SITE_URL}job-listings`
  );

  const dataarr = Array.from(data);
  const jobs = dataarr.map((job) => {
    if (userInfo.jobCategories === job.job_category.name) {
      return job;
    }
  });

  let jobListings = jobs.filter(function (element) {
    return element !== undefined;
  });

  if (loading) {
    return (
      <React.Fragment>
        <b>Loading...</b>
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <b>Error, while fetching jobs...</b>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {/* <JobFilter /> */}
      {jobListings.length > 0 ? (
        jobListings.map((job) => {
          if (userInfo.jobCategories === job.job_category.name) {
            return (
              <JobFeed
                /* Job info props */
                key={job.id}
                id={job.id}
                title={job.title}
                subTitle={job.dateortime}
                desc={job.description}
                workingType={job.working_type.name}
                expirence={job.experience_type.name}
                duration={job.duration.name}
                /* Company info props */
                companyName={job.companyName}
                companyType={job.companyType}
                requirements={[
                  { id: 1, reqName: job.Location },
                  { id: 2, reqName: job.Availability },
                  { id: 3, reqName: job.job_category.name },
                ]}
              />
            );
          }
        })
      ) : (
        <p>
          <b>No job found!</b>
        </p>
      )}
    </React.Fragment>
  );
}
