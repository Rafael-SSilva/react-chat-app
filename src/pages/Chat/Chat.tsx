import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import CurrentChat from "./CurrentChat/CurrentChat";
import Container from "./styles";
import Users from "./Users/Users";
import SearchIcon from "./assets/search-solid.svg";

const searchContacts = [
  {
    username: "Lucas",
    fullName: "Lucas Ribeiro",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  },
  {
    username: "Rafael",
    fullName: "Rafael Santos",
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

function Chat() {
  const [activeTab, setActiveTab] = useState("chat");
  const [contacts, setContacts] = useState([]);
  const activeUsers = [
    {
      username: "Lucas",
      fullName: "Lucas Ribeiro",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      username: "Rafael",
      fullName: "Rafael Santos",
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

  const userMessages = [
    { message: "Iae mano, beleza?", sending: true },
    { message: "Beleza e vc?", sending: false },
    { message: "Tranquilo... Fazendo?", sending: true },
    { message: "Jogando um CsGo aqui, qual a boa?", sending: false },
    { message: "Vamos fazer um app em React?", sending: true },
    { message: "Bora... App do que ?", sending: false },
    { message: "Um ToDo app básico.", sending: true },
    { message: "Teste aee.", sending: true },
  ];

  useEffect(() => {
    setActiveTab("chat");
    setContacts([]);
    if (searchContacts.length < 1) {
      console.log("");
    }
  }, []);

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
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
                <div
                  className={activeTab === "chat" ? "active" : ""}
                  onClick={() => setActiveTab("chat")}
                  onKeyPress={() => setActiveTab("chat")}
                  role="button"
                  tabIndex={0}>
                  <span>Chats</span>
                </div>
                <div
                  className={activeTab === "search" ? "active" : ""}
                  onClick={() => setActiveTab("search")}
                  onKeyPress={() => setActiveTab("search")}
                  role="button"
                  tabIndex={0}>
                  <span>Search</span>
                </div>
              </div>
            </div>
            <div className="chat__sidebar--body">
              {activeTab === "search" && (
                <div className="chat__sidebar--body-search">
                  <input type="text" placeholder="user@email.com" />
                  <div
                    className="search-button"
                    onKeyPress={() => {}}
                    onClick={() => {}}
                    area-hidden="false"
                    role="button"
                    tabIndex={0}>
                    <img srcSet={SearchIcon} alt="asdsa" />
                  </div>
                </div>
              )}
              <Users users={activeTab === "chat" ? activeUsers : contacts} />
            </div>
          </div>
          <CurrentChat messages={userMessages} />
        </div>
      </div>
    </Container>
  );
}

export default Chat;
