import React from "react";
import { StyledLabel } from "./styled";

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;
