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
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [allMessages]);

  function handleSendMessage(event: KeyboardEvent): void {
    if (event?.key === "Enter" && !event?.shiftKey && typeText.trim()) {
      const messageNew: MessageProp = {
        message: typeText,
        sending: true,
      };
      setTypedText("");
      setAllMessages((prev) => [...prev, messageNew]);
    }
  }

  function HandleKeyPress(event: KeyboardEvent): void {
    if (event?.key === "Enter" && !event?.shiftKey) {
      event.preventDefault();
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
            allMessages.map((msg: MessageProp) => (
              <Message sending={msg.sending} message={msg.message} />
            ))}
          <div ref={lastMessageRef} />
        </div>
      </div>
      <div className="textbox">
        <textarea
          onKeyDown={handleSendMessage}
          value={typeText}
          onChange={(e) => setTypedText(e.target.value)}
          onKeyPress={HandleKeyPress}
        />
      </div>
    </Container>
  );
}

export default CurrentChat;
