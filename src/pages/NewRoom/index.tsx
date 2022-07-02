import React, { useEffect, useState } from "react";
import { NewRoomContainer, FormWrapper, InputWrapper } from "./styled";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import logo from "../../assets/logo/logo.svg";

const NewRoom = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <NewRoomContainer>
      <div>
        <img src={logo} alt="Logo Accurate Software" />
        <FormWrapper>
          <InputWrapper>
            <Label text="Nome de usuario" />
            <Input
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <Label text="Nome da sala" />
            <Input />
            <Button text="Criar" />
          </InputWrapper>
        </FormWrapper>
      </div>
    </NewRoomContainer>
  );
};

export default NewRoom;
