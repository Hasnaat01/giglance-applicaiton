import React from "react";
import { Layout } from "../../../components";
import { PreferencesLayout } from "../../../layouts";

export function Preferences() {
  return (
    <Layout header heading="Preferences" sidebar preferences>
      <PreferencesLayout />
    </Layout>
  );
}
