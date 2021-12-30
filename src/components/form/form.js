import React from "react";
import {
  AppForm,
  AppFormButton,
  AppFormGroup,
  AppFormInput,
  AppFormLabel,
  AppFormLink,
} from "./styled";

export function Form({ children, ...restProps }) {
  return <AppForm {...restProps}>{children}</AppForm>;
}

Form.Group = function FormGroup({ children, ...restProps }) {
  return <AppFormGroup {...restProps}>{children}</AppFormGroup>;
};
Form.Label = function Label({ children, ...restProps }) {
  return <AppFormLabel {...restProps}>{children}</AppFormLabel>;
};
Form.Input = function Input({ children, ...restProps }) {
  return <AppFormInput {...restProps} />;
};
Form.Button = function Button({ children, ...restProps }) {
  return <AppFormButton {...restProps}>{children}</AppFormButton>;
};
Form.Link = function Link({ children, ...restProps }) {
  return <AppFormLink {...restProps}>{children}</AppFormLink>;
};
