import React from "react";
import Message from "../Message/Message";
import Container from "./styles";

type MessageProp = {
  message: string;
  sending: boolean;
};

type MessagesProps = {
  messages: MessageProp[];
};

function Messages({ messages }: MessagesProps) {
  return (
    <Container>
      {messages &&
        messages.map((msg: MessageProp) => (
          <Message sending={msg.sending} message={msg.message} />
        ))}
    </Container>
  );
}

export default Messages;
