import React, { useState } from "react";
import { NewRoomContainer, FormWrapper, InputWrapper } from "./styled";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import logo from "../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";

const NewRoom = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");

  const navigate = useNavigate();

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
            <Input
              value={roomName}
              onChange={({ target }) => setRoomName(target.value)}
            />
            <Button
              text="Criar"
              onClick={() => {
                if (userName.length > 0 && roomName.length > 0) {
                  navigate(
                    `/chatRoom?userName=${userName}&roomName=${roomName}`
                  );
                } else {
                  alert("Preencha os campos corretamente!");
                }
              }}
            />
          </InputWrapper>
        </FormWrapper>
      </div>
    </NewRoomContainer>
  );
};

export default NewRoom;
