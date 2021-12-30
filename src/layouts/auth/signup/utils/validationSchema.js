import * as Yup from "yup";

export default [
  Yup.object().shape({
    experienceLevel: Yup.string().required("Expirence level is required"),
  }),
  Yup.object().shape({
    billingMethod: Yup.string().required("Billing method is required"),
  }),
  Yup.object().shape({
    lastProjectLength: Yup.string().required("Last project length is required"),
  }),
  Yup.object().shape({
    jobCategories: Yup.string()
      .min(1, "Must choose at least one category.")
      .required("Job categories are required"),
  }),
  Yup.object().shape({
    availability: Yup.string().required("Availability is required"),
  }),
  Yup.object().shape({
    workingLocation: Yup.string().required("Working location is required"),
  }),
  Yup.object().shape({
    fullname: Yup.string().required("Kindly enter your fullname"),
  }),
  Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .matches(/[a-z]/, "At least one lowercase character"),
  }),
  Yup.object().shape({
    emailAddress: Yup.string()
      .email("Invalid email")
      .required("Kindly enter your email"),
  }),
  Yup.object().shape({
    contactNumber: Yup.string()
      .typeError("That doesn't look like a phone number")
      .required("Kindly enter your number")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
  }),
  Yup.object().shape({
    password: Yup.string()
      .matches(/[A-Z]/, "At least one uppercase character")
      .matches(
        /[a-zA-Z]+[^a-zA-Z\s]+/,
        "At least 1 number or special character (@,!,#, etc)."
      )
      .required("Kindly enter your password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  }),
  Yup.object().shape({
    subscriptionPlan: Yup.string().required("Subscription plan is required"),
  }),
  Yup.object().shape({
    cardName: Yup.string().required("Kindly enter your card name"),
    cardNumber: Yup.string()

      .max(16)
      .required("Enter your card number"),
    expiringDate: Yup.string().required("Fill the expiring date"),
    cvc: Yup.string().min(3).max(4).required("Enter your CVC"),
  }),
];
