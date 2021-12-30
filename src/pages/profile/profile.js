import React from "react";
import { Layout } from "../../components";
import { ProfileLayout } from "../../layouts";

export function Profile() {
  return (
    <Layout header heading="Profile" profile>
      <ProfileLayout />
    </Layout>
  );
}
