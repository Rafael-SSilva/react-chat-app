import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import Container from "./styles";

type UserProp = {
  username: string;
  fullName: string;
  imageUrl?: string;
};

type UsersProps = {
  users: DocumentData[];
  handleActiveChat: (active: DocumentData) => void;
};

function Users({ users, handleActiveChat }: UsersProps) {
  const [activeUser, setActiveUser] = useState<DocumentData>(
    {} as DocumentData
  );

  const setActiveChat = (user: DocumentData) => {
    handleActiveChat(user);
    setActiveUser(user);
  };

  return (
    <Container>
      {users &&
        users.map((user, index) => (
          <div
            className={user.uuid === activeUser.uuid ? "user active" : "user"}
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
