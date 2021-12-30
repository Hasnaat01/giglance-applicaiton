import { Field } from "formik";
import React from "react";
import {
  LetterBox,
  OptionFieldText,
  RadioButtonLabel,
  RadioField,
} from "../styled";

export default function RadioButtonField({
  idAndFor,
  fieldType,
  fieldName,
  value,
  letter,
  label,
}) {
  return (
    <RadioField>
      <RadioButtonLabel for={idAndFor}>
        <Field type={fieldType} name={fieldName} value={value} id={idAndFor} />
        <LetterBox className="letterBox">{letter}</LetterBox>
        <OptionFieldText>{label}</OptionFieldText>
      </RadioButtonLabel>
    </RadioField>
  );
}
