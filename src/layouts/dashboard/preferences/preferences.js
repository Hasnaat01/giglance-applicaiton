import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form } from "../../../components";
import { JobFilterWrapper } from "../job-listings/job-filter/styled";
import { firebase } from "../../../lib/firebase";
import { PreferencesCard, Title } from "./styled";
import { UserContext } from "../../../context/user";
import { useNavigate } from "react-router-dom";

/**
 * Add an item to a localStorage() object
 * @param {String} name  The localStorage() key
 * @param {String} key   The localStorage() value object key
 * @param {String} value The localStorage() value object value
 */
var addToLocalStorageObject = function (name, key, value) {
  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  existing = existing ? JSON.parse(existing) : {};

  // Add new data to localStorage Array
  existing[key] = value;

  // Save back to localStorage
  localStorage.setItem(name, JSON.stringify(existing));
};

export function PreferencesLayout() {
  const { user } = useContext(UserContext);
  const userInfo = user;

  const history = useNavigate();

  const experienceLevel = [
    userInfo.experienceLevel,
    "Beginner",
    "Intermediate",
    "Advance",
  ];
  const [experienceLevelOption, setExpierenceLevelOption] = useState(
    experienceLevel[0]
  );

  const location = [userInfo.workingLocation, "Anywhere", "U.S only"];
  const [locationOption, setLocationOption] = useState(location[0]);

  const Duration = [
    userInfo.lastProjectLength,
    "One time",
    "Short term",
    "Long term",
    "Not specific",
  ];
  const [durationOption, setDurationOption] = useState(Duration[0]);

  const Category = [
    userInfo.jobCategories,
    "Development & IT",
    "Design & Creative",
    "Finance & Accounting",
    "Admin & Customer Support",
    "Engineering & Architecture",
    "Legal, Sales & Marketing",
    "Writing & Translation",
  ];
  const [CategoryOption, setCategoryOption] = useState(Category[0]);

  const WorkingHours = [
    userInfo.availability,
    "Less than 30hrs/week",
    "More than 30hrs/week",
    "Not specific",
  ];
  const [WorkingHoursOption, setWorkingHoursOption] = useState(WorkingHours[0]);

  const BillingType = [
    userInfo.billingMethod,
    "Hourly",
    "Fixed",
    "Not specific",
  ];
  const [BillingTypeOption, setBillingTypeOption] = useState(BillingType[0]);

  const preferencesHandler = (e) => {
    e.preventDefault();
    const authUserInfo = firebase
      .firestore()
      .collection("users")
      .doc(userInfo.userId);

    authUserInfo.update({
      experienceLevel: experienceLevelOption,
      workingLocation: locationOption,
      lastProjectLength: durationOption,
      jobCategories: CategoryOption,
      availability: WorkingHoursOption,
      billingMethod: BillingTypeOption,
    });

    addToLocalStorageObject(
      "authUser",
      "experienceLevel",
      experienceLevelOption
    );
    addToLocalStorageObject("authUser", "workingLocation", locationOption);
    addToLocalStorageObject("authUser", "lastProjectLength", durationOption);
    addToLocalStorageObject("authUser", "jobCategories", CategoryOption);
    addToLocalStorageObject("authUser", "availability", WorkingHoursOption);
    addToLocalStorageObject("authUser", "billingMethod", BillingTypeOption);

    window.location.reload();
  };

  return (
    <React.Fragment>
      <PreferencesCard className="card card-default preferences-card">
        <Title className="heading">Job Preferences</Title>
        <JobFilterWrapper preferences>
          <Form>
            <Form.Group className="job-filter-fields">
              <Dropdown
                title={experienceLevelOption}
                gray
                listings={experienceLevel}
                setValue={setExpierenceLevelOption}
              />
              <Dropdown
                title={locationOption}
                listings={location}
                gray
                setValue={setLocationOption}
              />
              <Dropdown
                title={durationOption}
                listings={Duration}
                gray
                setValue={setDurationOption}
              />
            </Form.Group>
            <Form.Group className="job-filter-fields">
              <Dropdown
                title={CategoryOption}
                listings={Category}
                gray
                setValue={setCategoryOption}
              />

              <Dropdown
                title={WorkingHoursOption}
                listings={WorkingHours}
                gray
                setValue={setWorkingHoursOption}
              />
              <Dropdown
                title={BillingTypeOption}
                listings={BillingType}
                gray
                setValue={setBillingTypeOption}
              />
            </Form.Group>
            <Form.Group className="job-filter-fields btn-wrapper">
              <Button className="search-filter" onClick={preferencesHandler}>
                Save changes
              </Button>
            </Form.Group>
          </Form>
        </JobFilterWrapper>
      </PreferencesCard>
    </React.Fragment>
  );
}
