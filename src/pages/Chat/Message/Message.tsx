import React from "react";
import Container from "./styles";

interface MessageProps {
  message: string;
  sending: boolean;
}

function Message({ message, sending }: MessageProps) {
  return (
    <Container sending={sending}>
      <p>{message}</p>
    </Container>
  );
}

export default Message;
