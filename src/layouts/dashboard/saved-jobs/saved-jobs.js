import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JobFeed } from "../../../components";
import { SavedJobsFeeds } from "./styled";

import { db, firebase } from "../../../lib/firebase";
import { UserContext } from "../../../context/user";
import { Link } from "react-router-dom";

export function SavedJobsLayout() {
  const { user } = useContext(UserContext);
  const userInfo = user;

  const [loader, setLoader] = useState(false);

  const [savedJobs, setSavedJobs] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    db.collection("users")
      .doc(userInfo.userId)
      .collection("savedJobs")
      .onSnapshot((ss) => setSavedJobs(ss.docs));
  }, []);

  if (savedJobs.length == 0) {
    return (
      <p className="mt-4">
        <b>No job is saved!</b>
      </p>
    );
  } else {
    return (
      <SavedJobsFeeds>
        {savedJobs.map((doc) => {
          return (
            <JobFeed
              title={doc.data().title}
              subTitle={doc.data().dateortime}
              desc={doc.data().description}
              workingType={doc.data().working_type.name}
              expirence={doc.data().experience_type.name}
              duration={doc.data().duration.name}
              companyName={doc.data().companyName}
              companyType={doc.data().companyType}
              requirements={[
                { id: 1, reqName: doc.data().Location },
                { id: 2, reqName: doc.data().Availability },
                { id: 3, reqName: doc.data().job_category.name },
              ]}
              id={doc.data().id}
            />
          );
        })}
      </SavedJobsFeeds>
    );
  }
}
