import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { WrapperMessage } from "./styled";
import Message from "../../components/Message";
import useWebSocket from "react-use-websocket";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ChatRoom = (): JSX.Element => {
  const [userName, setUserName] = useState<string | null>("");
  const [roomName, setRoomName] = useState<string | null>("");
  const [message, setMessage] = useState<string>("");
  const [connect, setConnect] = useState<boolean>(false);
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  interface WebSocketEvent {
    message: "NOVA_MENSAGEM";
    body: {
      mensagem: string;
      usuario: string;
    };
  }

  interface WebSocketMessage {
    mensagem: string;
    usuario: string;
  }

  useWebSocket(
    `ws://localhost:8000/ws/chat/${roomName}/participant/${userName}/`,
    {
      onMessage: (event) => {
        const { message, body }: WebSocketEvent = JSON.parse(event.data);

        if (message === "NOVA_MENSAGEM") {
          setMessages((messages) => [...messages, body]);
        }
      },
    },
    connect
  );

  const sendMessage = async () => {
    await fetch(`http://localhost:8000/mensagem/${roomName}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        usuario: userName,
        mensagem: message,
      }),
    });
  };

  useEffect(() => {
    setUserName(query.get("userName"));
    setRoomName(query.get("roomName"));
    setConnect(true);
  }, []);

  return (
    <Container>
      <h1
        style={{
          fontFamily: "Open Sans",
          fontSize: "40px",
          marginTop: "20px",
          color: "#515151",
        }}
      >
        {roomName}
      </h1>
      <WrapperMessage>
        {messages.map(({ usuario, mensagem }, index) => {
          return (
            <Message
              userName={usuario}
              message={mensagem}
              key={`${usuario}-${index}`}
              color={!(index % 2 === 0)}
            />
          );
        })}
      </WrapperMessage>
      <Input
        value={message}
        placeholder="Digite uma mensagem"
        onChange={({ target }) => setMessage(target.value)}
      />
      <Button text="Enviar" onClick={() => sendMessage()} />
      <Button
        backgroundColor="tomato"
        text="Limpar chat"
        onClick={() => setMessages([])}
      />
    </Container>
  );
};

export default ChatRoom;
