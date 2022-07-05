import React from "react";
import { MessageContainer, MessageWrapper, UserName, Content } from "./styled";

interface MessageProps {
  userName: string;
  message: string;
  color?: boolean;
}

const Message = ({
  userName,
  message,
  color = false,
}: MessageProps): JSX.Element => {
  return (
    <MessageContainer>
      <div>
        <UserName>{userName}</UserName>
        <MessageWrapper
          style={{ backgroundColor: color ? "#6FEA36" : "#FFAA2B" }}
        >
          <Content>{message}</Content>
        </MessageWrapper>
      </div>
    </MessageContainer>
  );
};

export default Message;
