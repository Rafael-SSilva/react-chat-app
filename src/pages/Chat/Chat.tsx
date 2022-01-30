import { Avatar } from "@mui/material";
import React from "react";
import Message from "./Message/Message";
import Container from "./styles";

function Chat() {
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
              <div className="chat__sidebar--body-user active">
                <Avatar
                  alt="Rafael"
                  src=""
                  sx={{ width: 38, height: 38, fontSize: "18px" }}>
                  LR
                </Avatar>
                <span>Lucas Ribeiro</span>
              </div>
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
              <div className="messages">
                <Message sending={false} message="Iae mano Beleza?" />
                <Message sending message="Beleza e vc mano ?" />
                <Message sending={false} message="To de boa tbm..." />
                <Message
                  sending={false}
                  message="Essa semana não vou validar a janela"
                />
                <Message sending={false} message="Quero nem saber..." />
                <Message sending message="Ta certo mano kkk" />
              </div>
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
