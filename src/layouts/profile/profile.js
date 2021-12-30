import React, { useContext, useState } from "react";

import {
  ProfileCard,
  UserInfo,
  CardHeading,
  IconBox,
  FieldsWrapper,
  DeletePaymentMethod,
  ImageBox,
} from "./styled";

// Image
import { ReactComponent as EditIcon } from "../../assets/images/profile/edit.svg";
import { Input } from "../../components";
import { UserContext } from "../../context/user";

export function ProfileLayout() {
  document.title = "gigLance | Profile";
  const { user } = useContext(UserContext);
  const userInfo = user;

  const [email, setEmail] = useState(userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.contactNumber);
  const [cardNumber, setCardNumber] = useState(userInfo.cardNumber);
  const [expiry, setExpiry] = useState("");

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

          <span id="username">
            <CardHeading>
              {userInfo.fullname}{" "}
              <IconBox to="/profile/edit">
                <EditIcon className="edit-icon" />
              </IconBox>
            </CardHeading>
            <p className="short-name">@{userInfo.username}</p>
          </span>
        </UserInfo>
      </ProfileCard>

      <ProfileCard className="card">
        <CardHeading>
          Contact Information{" "}
          <IconBox to="/profile/edit">
            <EditIcon className="edit-icon" />
          </IconBox>
        </CardHeading>

        <FieldsWrapper>
          <Input
            name="email"
            onTextChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Email"
            type="email"
            required
            inputClasses="input-field"
            labelClass="field-label"
            disabled
          />
          <Input
            name="phone-number"
            onTextChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            label="Phone no."
            type="text"
            required
            inputClasses="input-field"
            labelClass="field-label"
            disabled
          />
        </FieldsWrapper>
      </ProfileCard>

      <ProfileCard className="card">
        <CardHeading>
          Payment Details{" "}
          <IconBox to="/profile/edit">
            <EditIcon className="edit-icon" />
          </IconBox>
        </CardHeading>

        <FieldsWrapper>
          <Input
            name="card-number"
            onTextChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            label="Card Number"
            type="text"
            required
            inputClasses={`input-field`}
            labelClass="field-label"
            visaCard
            disabled
          />
          <Input
            name="expiry"
            onTextChange={(e) => setExpiry(e.target.value)}
            value={expiry}
            label="Expiry"
            type="date"
            required
            inputClasses="input-field"
            labelClass="field-label"
            disabled
          />
        </FieldsWrapper>

        <DeletePaymentMethod>
          <span id="txt">Delete Payment Method</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
          >
            <path
              d="M11.2383 0.988281V2.5H0.761719V0.988281H3.36328L4.13672 0.25H7.86328L8.63672 0.988281H11.2383ZM1.5 12.2383V3.23828H10.5V12.2383C10.5 12.6367 10.3477 12.9883 10.043 13.293C9.73828 13.5977 9.38672 13.75 8.98828 13.75H3.01172C2.61328 13.75 2.26172 13.5977 1.95703 13.293C1.65234 12.9883 1.5 12.6367 1.5 12.2383Z"
              fill="#0A70B0"
            />
          </svg>
        </DeletePaymentMethod>
      </ProfileCard>
    </React.Fragment>
  );
}
