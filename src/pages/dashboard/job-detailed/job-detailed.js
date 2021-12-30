import React, { useContext } from "react";
import { Layout } from "../../../components";
import { UserContext } from "../../../context/user";
import UseFetch from "../../../hooks/useFetch";
import { JobDetailedLayout } from "../../../layouts";

export function JobDetailed() {
  const { REACT_APP_SITE_URL } = process.env;
  const { user } = useContext(UserContext);
  const userInfo = user;
  const { loading, data, error } = UseFetch(
    `${REACT_APP_SITE_URL}job-listings`
  );

  const jobs = [];

  data.map((job) => {
    if (userInfo.jobCategories === job.job_category.name) {
      jobs.push(job);
    }
  });

  return (
    <Layout header heading={`Development & IT jobs (${jobs.length})`} JobDetail>
      <JobDetailedLayout />
    </Layout>
  );
}
