import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import CurrentChat from "./CurrentChat/CurrentChat";
import Container from "./styles";
import Users from "./Users/Users";
import SearchInput from "./SearchInput/SearchInput";
import useAuth from "../../context/AuthProvider/useAuth";
import { auth } from "../../services/firebase";
import Spinner from "../../components/Spinner/Spinner";

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
    username: "Luciano",
    fullName: "Luciano da Silva",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  },
  {
    username: "Luan",
    fullName: "Luan de Souza",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  },
  {
    username: "Luiz",
    fullName: "Luiz Gomes",
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

type UserProp = {
  username: string;
  fullName: string;
  imageUrl?: string;
};

const userMessages = [
  { message: "Iae mano, beleza?", sending: true, id: "a" },
  { message: "Beleza e vc?", sending: false, id: "b" },
  { message: "Tranquilo... Fazendo?", sending: true, id: "c" },
];

function Chat() {
  const [activeTab, setActiveTab] = useState("chat");
  const [contacts, setContacts] = useState<UserProp[]>([]);
  const [search, setSearch] = useState<string>("");
  const userAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab("chat");
    setContacts([]);
  }, [userAuth]);

  const handleSearch = (): void => {
    if (!search.trim()) {
      setContacts([]);
    } else {
      const filtered = searchContacts.filter((x) =>
        x.fullName.toLowerCase().includes(search.toLowerCase())
      );
      setContacts(filtered);
    }
  };

  const handleLogout = async () => {
    await userAuth.logout();
    navigate("/signin");
  };

  return userAuth.loading ? (
    <Spinner />
  ) : (
    <Container>
      <div className="chat">
        <div className="chat__header">
          <div className="avatar">
            <Avatar>R</Avatar>
            <span>Rafael</span>
          </div>
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
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
                  onKeyPress={() => {}}
                  role="button"
                  tabIndex={0}>
                  <span>Search</span>
                </div>
              </div>
            </div>
            <div className="chat__sidebar--body">
              {activeTab === "search" && (
                <SearchInput
                  inputValue={search}
                  inputChange={(e) => setSearch(e.target.value)}
                  imgAlt="search button"
                  keyPressFc={() => {}}
                  onClickFc={handleSearch}
                  tabIndexNum={0}
                />
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
