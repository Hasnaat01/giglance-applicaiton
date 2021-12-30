import React, { useContext, useState } from "react";
import swal from "@sweetalert/with-react";
import { Button, HollowButton, Input } from "../../../components";
import { UserContext } from "../../../context/user";

import { firebase } from "../../../lib/firebase";

import {
  ProfileCard,
  UserInfo,
  CardHeading,
  FieldsWrapper,
  ImageBox,
} from "../styled";
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

export function EditProfileLayout() {
  document.title = "gigLance | Edit profile";
  const { user } = useContext(UserContext);
  const userInfo = user;
  const navigate = useNavigate();

  const [userfullName, setFullname] = useState(userInfo.fullname);
  const [userEmail, setEmail] = useState(userInfo.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.contactNumber);
  const [cardHolderName, setCardHolderName] = useState(userInfo.cardName);
  const [cardNo, setCardNo] = useState(userInfo.cardNumber);
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCVC] = useState(userInfo.cvc);

  // Disable condition for user fullname
  let disablefullnameSaveBtn = userfullName === "";
  // Disable condition for user's email & password
  let disableMailOrNumSaveBtn = userEmail === "" || phoneNumber === "";
  // Disable condition for Payment Details
  let disablePaymentDetailssection =
    cardHolderName === "" ||
    cardNo === "" ||
    expirationDate === "" ||
    cvc === "";

  const usernameHandler = () => {
    const authUserInfo = firebase
      .firestore()
      .collection("users")
      .doc(userInfo.userId);

    authUserInfo.update({
      fullname: userfullName,
    });

    addToLocalStorageObject("authUser", "fullname", userfullName);

    const PopUpHeading = {
      fontSize: "23px",
      marginTop: "10px",
      lineHeight: "33px",
    };
    swal(
      <div>
        <img align="left" src="/logo.png" width="80px" />
        <br />
        <h1 align="left" style={PopUpHeading}>
          Username updated successfully!
        </h1>
      </div>
    );
  };

  const PhoneNumHandler = () => {
    const authUserInfo = firebase
      .firestore()
      .collection("users")
      .doc(userInfo.userId);

    authUserInfo.update({
      contactNumber: phoneNumber,
    });

    addToLocalStorageObject("authUser", "contactNumber", phoneNumber);

    const PopUpHeading = {
      fontSize: "23px",
      marginTop: "10px",
      lineHeight: "33px",
    };
    swal(
      <div>
        <img align="left" src="/logo.png" width="80px" />
        <br />
        <h1 align="left" style={PopUpHeading}>
          Phone number updated successfully!
        </h1>
      </div>
    );
  };

  const cancelBtnHandler = () => {
    navigate("/profile");
  };

  const firstLetter = userInfo.fullname.split(" ").map(function (item) {
    return item[0];
  });

  return (
    <React.Fragment>
      <ProfileCard className="card">
        <UserInfo className="user-info">
          <ImageBox>
            <span>{firstLetter}</span>
          </ImageBox>
          {/* <UserImg src={ProfileUserImg} /> */}

          <span id="username">
            <CardHeading id="edit-input-wrapper">
              <Input
                name="fullname"
                className="form-control"
                value={userfullName}
                onTextChange={(e) => setFullname(e.target.value)}
                editInput
              />
              <Button
                onClick={usernameHandler}
                profileEditBtn
                enableThickBtn
                disabledThickBtn={disablefullnameSaveBtn}
              >
                <span className="btn-txt">SAVE</span>
              </Button>
            </CardHeading>
            <p className="short-name">@{userInfo.username}</p>
          </span>
        </UserInfo>
      </ProfileCard>

      <ProfileCard className="card">
        <CardHeading>Contact Information </CardHeading>

        <FieldsWrapper>
          <Input
            name="phone-number"
            onTextChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            label="Phone no."
            type="text"
            required
            inputClasses="input-field"
            labelClass="field-label"
          />
        </FieldsWrapper>

        <div className="save-changes-or-cancel-btns">
          <Button
            profileEditBtn
            className="mb-edit-profile-btn"
            enableThickBtn
            disabledThickBtn={disableMailOrNumSaveBtn}
            onClick={PhoneNumHandler}
          >
            <span>SAVE CHANGES</span>
          </Button>
          <HollowButton
            profileEditBtn
            className="mb-edit-profile-btn"
            enableOutlineBtn
            disabledOutlineBtn={disableMailOrNumSaveBtn}
            onClick={cancelBtnHandler}
          >
            <span>CANCEL</span>
          </HollowButton>
        </div>
      </ProfileCard>

      <ProfileCard className="card">
        <CardHeading>Payment Details</CardHeading>

        <FieldsWrapper>
          <Input
            name="card-holder-name"
            onTextChange={(e) => setCardHolderName(e.target.value)}
            value={cardHolderName}
            label="Card holder name"
            type="text"
            required
            inputClasses={`input-field`}
            labelClass="field-label"
          />
          <Input
            name="cardno"
            onTextChange={(e) => setCardNo(e.target.value)}
            value={cardNo}
            label="Card no."
            type="text"
            required
            inputClasses="input-field"
            labelClass="field-label"
          />
        </FieldsWrapper>
        <br />
        <FieldsWrapper>
          <Input
            name="expiration-date"
            onTextChange={(e) => setExpirationDate(e.target.value)}
            value={expirationDate}
            label="Expiration date"
            type="date"
            required
            inputClasses={`input-field`}
            labelClass="field-label"
          />
          <Input
            name="cvc"
            onTextChange={(e) => setCVC(e.target.value)}
            value={cvc}
            label="CVC"
            type="number"
            required
            inputClasses="input-field"
            labelClass="field-label"
          />
        </FieldsWrapper>

        <div className="save-changes-or-cancel-btns">
          <Button
            profileEditBtn
            disabledBtn
            className="mb-edit-profile-btn"
            enableThickBtn
            disabledThickBtn={disablePaymentDetailssection}
          >
            <span className="btn-txt">SAVE CHANGES</span>
          </Button>
          <HollowButton
            profileEditBtn
            className="mb-edit-profile-btn"
            enableOutlineBtn
            disabledOutlineBtn={disablePaymentDetailssection}
          >
            <span className="btn-txt">CANCEL</span>
          </HollowButton>
        </div>
      </ProfileCard>
    </React.Fragment>
  );
}
