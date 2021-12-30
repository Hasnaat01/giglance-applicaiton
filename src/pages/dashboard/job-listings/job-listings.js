import React, { useContext } from "react";
import { Layout } from "../../../components";
import { UserContext } from "../../../context/user";
import UseFetch from "../../../hooks/useFetch";
import { JobListingsLayout } from "../../../layouts";

export function JobListings() {
  const { REACT_APP_SITE_URL } = process.env;
  const { user } = useContext(UserContext);
  const userInfo = user;
  const { loading, data, error } = UseFetch(
    `${REACT_APP_SITE_URL}job-listings`
  );

  let dataArr = Array.from(data);
  let jobs = dataArr.map((job) => {
    if (userInfo.jobCategories === job.job_category.name) {
      return job;
    }
  });

  document.title = "gigLance | Job listings";

  return (
    <Layout
      header
      heading={userInfo.jobCategories}
      sidebar
      jobPosts
      preferences
    >
      <JobListingsLayout myJobs={jobs} />
    </Layout>
  );
}
