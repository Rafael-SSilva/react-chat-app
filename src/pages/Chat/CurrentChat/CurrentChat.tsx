import { onAuthStateChanged } from "firebase/auth";
import {
  DocumentData,
  doc,
  onSnapshot,
  query,
  collection,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import React, { createRef, KeyboardEvent, useEffect, useState } from "react";
import useAuth from "../../../context/AuthProvider/useAuth";
import { auth, db } from "../../../services/firebase";
import Message from "../Message/Message";
import TextBox from "../TextBox/TextBox";
import UserChating from "../UserChating/UserChating";
import Container from "./styles";

type MessageProp = {
  message: string;
  sending: boolean;
  id: string;
  from: string;
  to: string;
};

type ChatProps = {
  user: DocumentData;
  chatId: string;
};
// Receber user ao inves de mensagenss
function CurrentChat({ user, chatId }: ChatProps) {
  const lastMessageRef = createRef<HTMLDivElement>();
  const [typeText, setTypedText] = useState("");
  const [allMessages, setAllMessages] = useState<DocumentData[]>([]);
  const userAuth = useAuth();

  useEffect(() => {
    if (user || userAuth) {
      const msgsRef = collection(db, "messages", chatId, "chat");
      const q = query(msgsRef, orderBy("timestamp", "asc"));

      const unsub = onSnapshot(q, (snapshot) => {
        const msgs: DocumentData[] = [];
        snapshot.forEach((msgDoc) => {
          msgs.push(msgDoc.data());
        });
        if (msgs.length) {
          setAllMessages(msgs);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [allMessages]);

  const handleSendMessage = async (event: KeyboardEvent) => {
    if (event?.key === "Enter" && !event?.shiftKey && typeText.trim()) {
      const messageNew = {
        message: typeText,
        from: userAuth.uid,
        to: user.uuid,
        sending: true,
        timestamp: serverTimestamp(),
      };
      setTypedText("");
      const messageRef = await addDoc(
        collection(db, "messages", chatId, "chat"),
        messageNew
      );
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
        <UserChating username={user.username} />
      </div>
      <div className="content">
        <div className="content-messages">
          {allMessages &&
            allMessages.map((msg: DocumentData) => (
              <Message
                sending={msg.from === userAuth.uid}
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
