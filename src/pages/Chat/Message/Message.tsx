import React from "react";
import Container from "./styles";

type MessageProps = {
  message: string;
  sending: boolean;
};

function Message({ message, sending = true }: MessageProps) {
  return (
    <Container sending={sending}>
      <p>{message}</p>
    </Container>
  );
}

export default Message;
