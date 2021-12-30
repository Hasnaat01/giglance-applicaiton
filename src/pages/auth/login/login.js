import React from "react";

// Components
import { Layout } from "../../../components";

// Style
import { LoginLayout } from "../../../layouts";

export const Login = () => {
  return (
    <Layout authentication>
      <LoginLayout />
    </Layout>
  );
};
