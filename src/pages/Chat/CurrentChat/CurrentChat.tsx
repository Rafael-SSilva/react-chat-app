import React, { createRef, useEffect } from "react";
import Message from "../Message/Message";
import UserChating from "../UserChating/UserChating";
import Container from "./styles";

type MessageProp = {
  message: string;
  sending: boolean;
};

type MessagesProps = {
  messages: MessageProp[];
};

function CurrentChat({ messages }: MessagesProps) {
  const lastMessageRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <Container className="body">
      <div className="header">
        <UserChating />
      </div>
      <div className="content">
        <div className="content-messages">
          {messages &&
            messages.map((msg: MessageProp, index) => (
              <Message
                ref={index === messages.length - 1 ? lastMessageRef : null}
                sending={msg.sending}
                message={msg.message}
              />
            ))}
        </div>
      </div>
      <div className="textbox">
        <textarea />
      </div>
    </Container>
  );
}

export default CurrentChat;
