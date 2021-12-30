import React, { useContext, useState, useEffect } from "react";
import {
  Formik,
  Form,
  Field,
  FormikConfig,
  FormikValues,
  ErrorMessage,
} from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user";
import { doesUsernameExist } from "../../../services/firebase";
import { firebase, db } from "../../../lib/firebase";

import {
  experienceLevel,
  billingMethod,
  lastProjectLength,
  jobCategories,
  yourAvailability,
  workingPlace,
  goodName,
  username,
  emailAddress,
  contactNumber,
  password,
  subscriptionPlans,
  planCheckout,
} from "./utils/signupFormModel";
import formInitialValues from "./utils/formInitialValues";
import validationSchema from "./utils/validationSchema";

import RadioButtonField from "./radioButton";

import {
  SlideBox,
  SlideTitle,
  SlideTagline,
  FieldsWrapper,
  TextField,
  TextFieldLabel,
  TextFieldBox,
  RadioGroup,
  CheckedBadge,
  CardLetter,
  CardContentBox,
  CardSubHeading,
  CardHeading,
  FormWrapper,
  Logo,
  AlreadyHaveAccount,
  Steps,
  LogoBox,
  ContentBox,
  FormContentWrapper,
  StepsProgress,
  StepsRibbon,
  StepsButtons,
  ArrowBtn,
  CardBox,
  EnterButtonBox,
  TabButtonBox,
  CategoriesBox,
  JobCategory,
  SignupBottomRibbon,
  ErrorMsgBox
} from "./styled.js";

import LogoImg from "../../../assets/images/dashboard/logo.png";
import UpArrow from "../../../assets/images/authentication/up-arrow.png";
import DownArrow from "../../../assets/images/authentication/down-arrow.png";
import Checked from "../../../assets/images/authentication/checked.png";
import EnterIcon from "../../../assets/images/authentication/enter-icon.png";

export default function SignupLayout() {
  const history = useNavigate();

  const [loader, setLoader] = useState(false);

  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const { addUser } = useContext(UserContext);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      history("/login");
    }
  });

  if (loader) {
    return (
      <div className="loader-wrapper">
        <div className="loader-box">
          <img src="/logo.png" width="100%" />
          <div class="requestProgress">
            <div class="bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <FormikStepper
      initialValues={formInitialValues}
      onSubmit={async (values) => {
        setLoader(true);
        const usernameExists = await doesUsernameExist(values.username);

        if (!usernameExists) {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(
                values.emailAddress,
                values.password
              )
              .then((cred) => {
                db.collection("users")
                  .doc(cred.user.uid)
                  .set({
                    userId: cred.user.uid,
                    experienceLevel: values.experienceLevel,
                    billingMethod: values.billingMethod,
                    lastProjectLength: values.lastProjectLength,
                    jobCategories: values.jobCategories,
                    availability: values.availability,
                    workingLocation: values.workingLocation,
                    fullname: values.fullname,
                    username: values.username,
                    email: values.emailAddress,
                    number: values.contactNumber,
                    contactNumber: values.contactNumber,
                    password: values.password,
                    subscriptionPlan: values.subscriptionPlan,
                    cardName: values.cardName,
                    cardNumber: values.cardNumber,
                    expiringDate: values.expiringDate,
                    cvc: values.cvc,
                  })
                  .then(() => {
                    history("/");
                  });
              });
          } catch (error) {
            setError(error.message);
          }
        } else {
          setError("That username is already taken, please try another.");
        }
      }}
    >
      <SlideBox>
        <SlideTitle>Start with telling us your experience level</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {experienceLevel.map(({ idAndFor, value, letter, label }) => (
              <RadioButtonField
                idAndFor={idAndFor}
                fieldType="radio"
                fieldName="experienceLevel"
                value={value}
                letter={letter}
                label={label}
              />
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>How you prefer to bill clients for your work?</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {billingMethod.map(({ idAndFor, value, letter, label }) => (
              <RadioButtonField
                idAndFor={idAndFor}
                fieldType="radio"
                fieldName="billingMethod"
                value={value}
                letter={letter}
                label={label}
              />
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>How long should your ideal project last?</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {lastProjectLength.map(({ idAndFor, value, letter, label }) => (
              <RadioButtonField
                idAndFor={idAndFor}
                fieldType="radio"
                fieldName="lastProjectLength"
                value={value}
                letter={letter}
                label={label}
              />
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Categories of Jobs you'd like to focus on?</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <CategoriesBox role="group" aria-labelledby="checkbox-group">
            {jobCategories.map(({ idAndFor, value, letter, label }) => (
              <JobCategory>
                <RadioButtonField
                  idAndFor={idAndFor}
                  fieldType="radio"
                  fieldName="jobCategories"
                  value={value}
                  letter={letter}
                  label={label}
                />
              </JobCategory>
            ))}
          </CategoriesBox>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>What will be your availability per week?</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {yourAvailability.map(({ idAndFor, value, letter, label }) => (
              <RadioButtonField
                idAndFor={idAndFor}
                fieldType="radio"
                fieldName="availability"
                value={value}
                letter={letter}
                label={label}
              />
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>For whom you want to work?</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {workingPlace.map(({ idAndFor, value, letter, label }) => (
              <RadioButtonField
                idAndFor={idAndFor}
                fieldType="radio"
                fieldName="workingLocation"
                value={value}
                letter={letter}
                label={label}
              />
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Now tell us your good name</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {goodName.map(({ label, name }) => {
              return (
                <TextField>
                  <TextFieldLabel>{label}</TextFieldLabel>
                  <TextFieldBox>
                    <Field type="text" name={name} />
                  </TextFieldBox>
                </TextField>
              );
            })}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Enter a unique username</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {username.map(({ label, name }) => (
              <TextField>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextFieldBox>
                  <Field type="text" name={name} />
                </TextFieldBox>
              </TextField>
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>What email address can we reach you at?</SlideTitle>
        <SlideTagline>
          We will use your email to notify you about new openings and to recover
          your account if you foget password.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {emailAddress.map(({ label, name }) => (
              <TextField>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextFieldBox>
                  <Field type="email" name={name} />
                </TextFieldBox>
              </TextField>
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Enter contact number</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {contactNumber.map(({ label, name }) => (
              <TextField>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextFieldBox>
                  <Field type="text" name={name} />
                </TextFieldBox>
              </TextField>
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Secure your account with password</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {password.map(({ label, name }) => (
              <TextField>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextFieldBox>
                  <Field type="password" name={name} />
                </TextFieldBox>
              </TextField>
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>Select a subscription plan</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {subscriptionPlans.map(
              ({ name, letter, planName, validity, idAndFor }) => (
                <CardBox for={idAndFor}>
                  <Field
                    type="radio"
                    name="subscriptionPlan"
                    value={name}
                    id={idAndFor}
                  />
                  <CheckedBadge src={Checked} className="checkedBadge" />
                  <CardLetter className="cardLetter">{letter}</CardLetter>
                  <CardContentBox>
                    <CardSubHeading>{planName}</CardSubHeading>
                    <CardHeading>{name}</CardHeading>
                    <CardSubHeading>{validity}</CardSubHeading>
                  </CardContentBox>
                </CardBox>
              )
            )}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
      <SlideBox>
        <SlideTitle>You selected value plan. It’s time to checkout</SlideTitle>
        <SlideTagline>
          Before helping you find a job, we would love to know little about you.
          Start with telling us your name.
        </SlideTagline>
        <FieldsWrapper>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            {planCheckout.map(({ name, label, type }) => (
              <TextField>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextFieldBox>
                  <Field type={type} name={name} />
                </TextFieldBox>
              </TextField>
            ))}
          </RadioGroup>
        </FieldsWrapper>
      </SlideBox>
    </FormikStepper>
  );
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const currentValidationSchema = validationSchema[step];

  const initialValuesArray = Object.keys(formInitialValues);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  useEffect(() => {
    document.addEventListener("keyup", function (event) {
      if (event.key === 13) {
        setStep((s) => s + 1);
      }
    });
  }, []);

  return (
    <Formik
      {...props}
      validationSchema={currentValidationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <FormWrapper>
            <FormContentWrapper>
              <LogoBox>
                <Logo src={LogoImg} />
              </LogoBox>
              <ContentBox>
                {currentChild}

                <>
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}

                  <ErrorMsgBox className="font-weight-bold text-danger">
                    <ErrorMessage name={initialValuesArray[step]} />
                  </ErrorMsgBox>
                </>

                <EnterButtonBox>
                  Press{" "}
                  <span className="highlighter">
                    <img src={EnterIcon} /> enter
                  </span>{" "}
                  when done
                </EnterButtonBox>
              </ContentBox>
              <SignupBottomRibbon className="d-flex justify-content-between ">
                {(step == 6 ||
                  step == 7 ||
                  step == 8 ||
                  step == 9 ||
                  step == 10 ||
                  step == 12) && (
                  <TabButtonBox>
                    Press <span className="highlighter">TAB</span> to select
                    next
                  </TabButtonBox>
                )}
                <AlreadyHaveAccount>
                  <p>
                    Already have an account? Press <span>ESC</span> to login.
                  </p>
                </AlreadyHaveAccount>
              </SignupBottomRibbon>
            </FormContentWrapper>
            <StepsRibbon>
              <Steps className="progress"></Steps>
              <StepsButtons>
                {step > 0 ? (
                  <ArrowBtn type="button" onClick={() => setStep((s) => s - 1)}>
                    <img src={UpArrow} />
                  </ArrowBtn>
                ) : null}
                <ArrowBtn type="submit">
                  {isLastStep() ? (
                    <React.Fragment>
                      <img src={DownArrow} />
                    </React.Fragment>
                  ) : (
                    <img src={DownArrow} />
                  )}
                </ArrowBtn>
              </StepsButtons>
              <StepsProgress
                className="progress-bar"
                role="progressbar"
                style={{ width: ((step + 1) / 13) * 100 + "%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></StepsProgress>
            </StepsRibbon>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
}
