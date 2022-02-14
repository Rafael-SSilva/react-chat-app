import { Avatar } from "@mui/material";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebase";
import Container from "./styles";

type UserProp = {
  username: string;
  fullName: string;
  imageUrl?: string;
};

type UsersProps = {
  users: string[];
  handleActiveChat: (active: DocumentData) => void;
  activeUser: DocumentData | any;
  tab: string;
};

function Users({ users, handleActiveChat, activeUser, tab }: UsersProps) {
  const [contacts, setContacts] = useState<DocumentData>([] as DocumentData[]);

  useEffect(() => {
    setContacts([]);
    if (users.length) {
      const msgsRef = collection(db, "users");
      const q = query(msgsRef, where("uuid", "in", users));

      const unsub = onSnapshot(q, (snapshot) => {
        const snapUsers: DocumentData[] = [];
        snapshot.forEach((usrSnap) => {
          snapUsers.push(usrSnap.data());
        });
        if (snapUsers.length) {
          setContacts(snapUsers);
        }
      });
      return unsub;
    }
    return () => {};
  }, [users]);

  const setActiveChat = (user: DocumentData) => {
    handleActiveChat(user);
  };

  return (
    <Container>
      {contacts &&
        contacts.map((user: DocumentData) => (
          <div
            className={`${
              user.uuid === activeUser?.uuid ? "user active" : "user"
            } ${user?.online ? "online" : ""}`}
            key={user.uuid}
            onClick={() => setActiveChat(user)}
            onKeyPress={() => setActiveChat(user)}
            role="button"
            tabIndex={0}>
            <Avatar
              alt={user.username}
              src={user?.avatar || ""}
              sx={{ width: 38, height: 38, fontSize: "18px" }}>
              {user.username.substring(0, 1).toUpperCase()}
            </Avatar>
            <span>{user.username}</span>
          </div>
        ))}
    </Container>
  );
}

export default Users;
