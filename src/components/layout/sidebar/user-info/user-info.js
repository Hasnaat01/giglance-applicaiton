import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/user";

import {
  EachIcon,
  IconImage,
  Icons,
  ImageBox,
  Text,
  UserImage,
  UserInfoWrapper,
  Username,
} from "./styled";

// Images
import AccountCircle from "../../../../assets/images/dashboard/sidebar/account_circle_icon.svg";
import LogOut from "../../../../assets/images/dashboard/sidebar/logout_icon.svg";

export function UserInfo() {
  const { user, signOut } = useContext(UserContext);
  const history = useNavigate();
  const userInfo = user;
  const logoutHandler = (e) => {
    e.preventDefault();
    signOut();
    history("/login");
  };

  const firstLetter = userInfo.fullname.split(" ").map(function (item) {
    return item[0];
  });

  const userFullName = userInfo.fullname;

  return (
    <UserInfoWrapper>
      <UserImage>
        <ImageBox>
          <span>{firstLetter}</span>
        </ImageBox>
      </UserImage>
      <Username>
        <Text>{userFullName}</Text>
      </Username>
      <Icons>
        <EachIcon>
          <Link to="/profile">
            <IconImage src={AccountCircle} />
          </Link>
        </EachIcon>
        <EachIcon onClick={logoutHandler}>
          <IconImage src={LogOut} />
        </EachIcon>
      </Icons>
    </UserInfoWrapper>
  );
}
