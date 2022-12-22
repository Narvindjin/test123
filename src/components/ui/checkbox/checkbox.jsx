import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "/src/components/styled";

const Label = styled.label`
  display: block;
`;

function Checkbox({
  labelComponent,
  name,
  value,
  text,
  onChange,
  isChecked,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default Checkbox;
