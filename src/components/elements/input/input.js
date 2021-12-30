import React from "react";
import { Field, Label, Wrapper, InputWrapper } from "./styled";
import { ReactComponent as VisaCard } from "../../../assets/images/profile/visa-card.svg";

export const Input = ({
  wrapperClasses,
  label,
  labelClass,
  inputClasses,
  onTextChange,
  type,
  visaCard,
  editInput,
  ...restProps
}) => {
  return (
    <Wrapper className={wrapperClasses}>
      {label && <Label className={labelClass}>{label}</Label>}

      <InputWrapper visaCard={visaCard} id={editInput && "edit-input-wrapper"}>
        {visaCard && <VisaCard />}

        <Field
          className={inputClasses}
          id={(visaCard && "icon-input-field") || (editInput && "edit-input")}
          type={type}
          onChange={onTextChange}
          {...restProps}
        />
      </InputWrapper>
    </Wrapper>
  );
};
