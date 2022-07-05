import React from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
}

const Button = ({
  text,
  onClick,
  backgroundColor,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
