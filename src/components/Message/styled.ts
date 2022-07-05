import styled from "styled-components";

const MessageContainer = styled.div`
  margin-bottom: 20px;
`;

const MessageWrapper = styled.div`
  padding: 15px 0 15px 15px;
  border-radius: 10px;
  background-color: blue;
`;

const UserName = styled.span`
  font-family: "Open Sans";
  color: #515151;
  margin-bottom: 10px;
  display: block;
`;

const Content = styled.p`
  font-family: "Open Sans";
  color: #ffffff;
`;

export { MessageContainer, MessageWrapper, UserName, Content };
