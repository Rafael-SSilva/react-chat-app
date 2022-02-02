import React, { createRef, KeyboardEvent, useEffect, useState } from "react";
import Message from "../Message/Message";
import TextBox from "../TextBox/TextBox";
import UserChating from "../UserChating/UserChating";
import Container from "./styles";

type MessageProp = {
  message: string;
  sending: boolean;
  id: string;
};

type MessagesProps = {
  messages: MessageProp[];
};
// Receber user ao inves de mensagenss
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

  const handleSendMessage = (event: KeyboardEvent): void => {
    if (event?.key === "Enter" && !event?.shiftKey && typeText.trim()) {
      const messageNew: MessageProp = {
        message: typeText,
        sending: true,
        id: `${typeText.substring(0, 2)}x9-2x`,
      };
      setTypedText("");
      setAllMessages((prev) => [...prev, messageNew]);
    }
  };

  const HandleKeyPress = (event: KeyboardEvent): void => {
    if (event?.key === "Enter" && !event?.shiftKey) {
      event.preventDefault();
    }
  };

  return (
    <Container className="body">
      <div className="header">
        <UserChating />
      </div>
      <div className="content">
        <div className="content-messages">
          {allMessages &&
            allMessages.map((msg: MessageProp) => (
              <Message
                sending={msg.sending}
                message={msg.message}
                key={msg.id}
              />
            ))}
          <div ref={lastMessageRef} />
        </div>
      </div>
      <TextBox
        HandleKeyPress={HandleKeyPress}
        handleSendMessage={handleSendMessage}
        typeText={typeText}
        changeText={(e) => setTypedText(e.target.value)}
      />
    </Container>
  );
}

export default CurrentChat;
