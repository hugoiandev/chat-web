import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
}

const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
