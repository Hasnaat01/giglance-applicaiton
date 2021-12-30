import React from "react";
import { Layout } from "../../../components";
import { EditProfileLayout } from "../../../layouts";

export function EditProfile() {
  return (
    <Layout header heading="Edit Profile" profile>
      <EditProfileLayout />
    </Layout>
  );
}
