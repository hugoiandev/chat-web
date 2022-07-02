import React from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
