import React, { useContext, useState } from "react";

// Components
import { Form } from "../../../components";

// Images
import Logo from "../../../assets/images/authentication/logo.png";
import LoginSideContentImg from "../../../assets/images/authentication/login-side-img.png";

// Styled
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  Breadcrump,
  BreadcrumpHighlightedText,
  BreadcrumpText,
  ContentWrapper,
  ErrorBox,
  FirstColumn,
  ForgotPassLink,
  ForgotPasswordLinkWrapper,
  FormWrapper,
  ImgWrapper,
  LoginWrapper,
  LogoBox,
  MyLogo,
  SecondColImg,
  SignUpLink,
  SignUpLinkWrapper,
} from "./styled";
import { UserContext } from "../../../context/user";

import { firebase } from "../../../lib/firebase";

export const LoginLayout = () => {
  const history = useNavigate();
  const { addUser } = useContext(UserContext);

  const [loader, setLoader] = useState(false);
  // States for fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Condition for disabled the button
  let disabled = email === "" || password === "";

  const loginHandler = (e) => {
    setLoader(true);
    // Login issue is now solve you can check it again. Now you have to create a context and store the response value in context and show it every where PERFECT!!!
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        firebase
          .firestore()
          .collection("users")
          .get()
          .then(async function (snapshot) {
            await snapshot.forEach(function (doc) {
              const authUserChcking = doc.data().userId == cred.user.uid;

              if (authUserChcking) {
                addUser(doc.data(), {
                  userId: cred.user.uid,
                });
              }
            });
          });
      })
      .catch((error) => {
        // Handle error.
        setError(error.message.substr(10));
      });
  };

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

  // 404 page
  return (
    <LoginWrapper>
      <FirstColumn>
        {/* Content wrapper - box */}
        <ContentWrapper>
          {/* Logo */}
          <LogoBox>
            <MyLogo src={Logo} alt="gigLance" />
          </LogoBox>
          {/* Breadcrump */}
          <Breadcrump>
            <BreadcrumpText>
              <BreadcrumpHighlightedText>Home</BreadcrumpHighlightedText> {">"}{" "}
              Login
            </BreadcrumpText>
          </Breadcrump>
          {/* Form */}
          <FormWrapper>
            <Form onSubmit={loginHandler}>
              <Form.Group className="form-group">
                <Form.Label>Email address or Username</Form.Label>
                <Form.Input
                  className={`form-control ${
                    error && "text-danger border-danger"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Enter password</Form.Label>
                <Form.Input
                  className={`form-control ${
                    error && "text-danger border-danger"
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </Form.Group>
              <ForgotPasswordLinkWrapper className="form-group forget-password-link">
                {error && (
                  <ErrorBox className="animate__animated animate__fadeInDown">
                    <svg
                      aria-hidden="true"
                      class="stUf5b LxE1Id"
                      fill="currentColor"
                      focusable="false"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>{" "}
                    {error}
                  </ErrorBox>
                )}
                {email != email.toLowerCase() && (
                  <ErrorBox className="animate__animated animate__fadeInDown">
                    <svg
                      aria-hidden="true"
                      className="stUf5b LxE1Id"
                      fill="currentColor"
                      focusable="false"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>{" "}
                    Indetifier must be in lowercase
                  </ErrorBox>
                )}
                <ForgotPassLink to="#">Forgot Password?</ForgotPassLink>
              </ForgotPasswordLinkWrapper>
              <Form.Group className="form-group">
                <Form.Button
                  className="btn btn-block btn-primary"
                  disabled={disabled}
                  type="submit"
                >
                  LOGIN
                </Form.Button>
              </Form.Group>
            </Form>
            <SignUpLinkWrapper className="sig-up-link">
              <SignUpLink to="/signup">Create a new account</SignUpLink>
            </SignUpLinkWrapper>
          </FormWrapper>
        </ContentWrapper>
      </FirstColumn>
      <div className="second-col">
        {/* Content wrapper - box */}
        <ImgWrapper>
          <SecondColImg src={LoginSideContentImg} />
        </ImgWrapper>
      </div>
    </LoginWrapper>
  );
};
