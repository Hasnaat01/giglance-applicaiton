import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../../components";
import { UserContext } from "../../../context/user";
import UseFetch from "../../../hooks/useFetch";
import { SavedJobsLayout } from "../../../layouts";
import { db } from "../../../lib/firebase";

export function SavedJobs() {
  const { user } = useContext(UserContext);
  const [savedJobs, setSavedJobs] = useState([]);
  const userInfo = user;

  useEffect(() => {
    db.collection("users")
      .doc(userInfo.userId)
      .collection("savedJobs")
      .onSnapshot((ss) => setSavedJobs(ss.docs));
  }, []);

  document.title = "gigLance | Saved jobs";

  return (
    <Layout header heading={`Save jobs (${savedJobs.length})`} sidebar jobPosts>
      <SavedJobsLayout />
    </Layout>
  );
}
