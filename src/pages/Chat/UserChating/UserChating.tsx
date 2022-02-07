import { Avatar } from "@mui/material";
import React from "react";
import Container from "./styles";

function UserChating({ username }: { username: string }) {
  return (
    <Container>
      <Avatar alt="" sx={{ width: 38, height: 38, fontSize: "18px" }}>
        LR
      </Avatar>
      <span>{username}</span>
    </Container>
  );
}

export default UserChating;
