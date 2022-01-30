import { Avatar } from "@mui/material";
import React from "react";
import Container from "./styles";

type UserProp = {
  username: string;
  fullName: string;
  imageUrl?: string;
};

type UsersProps = {
  users: UserProp[];
};

function Users({ users }: UsersProps) {
  return (
    <Container>
      {users &&
        users.map((user) => (
          <div className="user active">
            <Avatar
              alt={user.username}
              src={user?.imageUrl || ""}
              sx={{ width: 38, height: 38, fontSize: "18px" }}>
              {user.username.substring(0, 1).toUpperCase()}
            </Avatar>
            <span>{user.fullName}</span>
          </div>
        ))}
    </Container>
  );
}

export default Users;
