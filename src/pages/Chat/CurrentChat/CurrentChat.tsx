import React from "react";
import Messages from "../Messages/Messages";
import UserChating from "../UserChating/UserChating";
import Container from "./styles";

function CurrentChat() {
  const userMessages = [
    { message: "Iae mano, beleza?", sending: true },
    { message: "Beleza e vc?", sending: false },
    { message: "Tranquilo... Fazendo?", sending: true },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: true },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: true },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: true },
  ];

  return (
    <Container className="body">
      <div className="header">
        <UserChating />
      </div>
      <div className="content">
        <Messages messages={userMessages} />
      </div>
      <div className="textbox">
        <textarea />
      </div>
    </Container>
  );
}

export default CurrentChat;
