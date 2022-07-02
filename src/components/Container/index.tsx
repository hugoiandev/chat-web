import React from "react";
import MainContainer from "./styled";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
