import { Avatar } from "@mui/material";
import React from "react";
import Container from "./styles";

function UserChating() {
  return (
    <Container>
      <Avatar alt="" sx={{ width: 38, height: 38, fontSize: "18px" }}>
        LR
      </Avatar>
      <span>Lucas Ribeiro</span>
    </Container>
  );
}

export default UserChating;
