import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Container from "./styles";

interface MessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message: string;
  sending: boolean;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ message, sending }, ref) => (
    <Container sending={sending} ref={ref}>
      <p>{message}</p>
    </Container>
  )
);

export default Message;
