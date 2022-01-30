import React, { createRef, KeyboardEvent, useEffect, useState } from "react";
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
  const [typeText, setTypedText] = useState("");
  const [allMessages, setAllMessages] = useState<MessageProp[]>([]);

  useEffect(() => {
    if (!allMessages.length) {
      setAllMessages(messages);
    }
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessages]);

  function handleSendMessage(event: KeyboardEvent): void {
    if (event?.key === "Enter") {
      setTypedText("");
      const messageNew: MessageProp = { message: typeText, sending: true };
      setAllMessages((prev) => [...prev, messageNew]);
    }
  }

  return (
    <Container className="body">
      <div className="header">
        <UserChating />
      </div>
      <div className="content">
        <div className="content-messages">
          {allMessages &&
            allMessages.map((msg: MessageProp, index: number) => (
              <Message
                ref={index === allMessages.length - 1 ? lastMessageRef : null}
                sending={msg.sending}
                message={msg.message}
              />
            ))}
        </div>
      </div>
      <div className="textbox">
        <textarea
          onKeyDown={handleSendMessage}
          value={typeText}
          onChange={(e) => setTypedText(e.target.value)}
        />
      </div>
    </Container>
  );
}

export default CurrentChat;
