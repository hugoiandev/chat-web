import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = ({ onChange, value }: InputProps) => {
  return <StyledInput value={value} onChange={onChange} />;
};

export default Input;
