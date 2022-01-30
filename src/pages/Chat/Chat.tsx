import { Avatar } from "@mui/material";
import React from "react";
import Messages from "./Messages/Messages";
import Container from "./styles";
import Users from "./Users/Users";

function Chat() {
  const userMessages = [
    { message: "Iae mano, beleza?", sending: true },
    { message: "Beleza e vc?", sending: false },
    { message: "Tranquilo... Fazendo?", sending: true },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
  ];

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
          <div className="chat__body">
            <div className="chat__body--header">
              <div className="avatar">
                <Avatar alt="" sx={{ width: 38, height: 38, fontSize: "18px" }}>
                  LR
                </Avatar>
                <span>Lucas Ribeiro</span>
              </div>
            </div>
            <div className="chat__body--content">
              <Messages messages={userMessages} />
            </div>
            <div className="chat__body--textbox">
              <textarea className="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Chat;
