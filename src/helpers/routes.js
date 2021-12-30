import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user) {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

export const AuthRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Navigate to="/job-listings" />;
  }
  if (!user) {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
