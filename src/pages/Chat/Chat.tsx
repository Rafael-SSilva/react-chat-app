import { Avatar } from "@mui/material";
import React from "react";
import CurrentChat from "./CurrentChat/CurrentChat";
import Container from "./styles";
import Users from "./Users/Users";

function Chat() {
  const activeUsers = [
    {
      username: "Rafael",
      fullName: "Rafael Santos",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      username: "Lucas",
      fullName: "Lucas Ribeiro",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      username: "João",
      fullName: "João da Silva",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      username: "Pedro",
      fullName: "Pedro dos Santos",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
  ];

  return (
    <Container>
      <div className="chat">
        <div className="chat__header">
          <div className="avatar">
            <Avatar>R</Avatar>
            <span>Rafael</span>
          </div>
          <button type="button">Logout</button>
        </div>
        <div className="divider">
          <div className="chat__sidebar">
            <div className="chat__sidebar--header">
              <div className="chat__sidebar--header-tabs">
                <div className="active">
                  <span>Chats</span>
                </div>
                <div>
                  <span>Contacts</span>
                </div>
              </div>
            </div>
            <div className="chat__sidebar--body">
              <Users users={activeUsers} />
            </div>
          </div>
          <CurrentChat />
        </div>
      </div>
    </Container>
  );
}

export default Chat;
