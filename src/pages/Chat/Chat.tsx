import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import CurrentChat from "./CurrentChat/CurrentChat";
import Container from "./styles";
import Users from "./Users/Users";
import SearchInput from "./SearchInput/SearchInput";
import useAuth from "../../context/AuthProvider/useAuth";
import { auth, db } from "../../services/firebase";
import Spinner from "../../components/Spinner/Spinner";

const searchContacts = [
  {
    username: "Lucas",
    fullName: "Lucas Ribeiro",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "Rafael",
    fullName: "Rafael Santos",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "Luciano",
    fullName: "Luciano da Silva",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "Luan",
    fullName: "Luan de Souza",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "Luiz",
    fullName: "Luiz Gomes",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "João",
    fullName: "João da Silva",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
  },
  {
    username: "Pedro",
    fullName: "Pedro dos Santos",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    uuid: "asdsadas",
    email: "adasdas",
    online: true,
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
  avatar?: string;
  uuid: string;
  online: boolean;
  email: string;
};

const userMessages = [
  { message: "Iae mano, beleza?", sending: true, id: "a" },
  { message: "Beleza e vc?", sending: false, id: "b" },
  { message: "Tranquilo... Fazendo?", sending: true, id: "c" },
];

function Chat() {
  const [activeTab, setActiveTab] = useState("chat");
  const [contacts, setContacts] = useState<DocumentData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [chatUsers, setChatUsers] = useState<DocumentData[]>([]);
  const [activeUser, setActiveUser] = useState<DocumentData>([]);
  const userAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab("chat");
    setContacts([]);
    userAuth.setLoading(true);

    (async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const userList: any = [];
      querySnapshot.forEach((doc) => {
        userList.push(doc.data());
      });
      setChatUsers(userList);
      userAuth.setLoading(false);
    })();
  }, []);

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

  const activeChatCB = (active: DocumentData) => {
    setActiveUser(active);
  };

  return userAuth.loading ? (
    <Spinner />
  ) : (
    <Container>
      <div className="chat">
        <div className="chat__header">
          <div className="avatar">
            <Avatar>R</Avatar>
            <span>{userAuth.displayName}</span>
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
              <Users
                handleActiveChat={activeChatCB}
                users={activeTab === "chat" ? chatUsers : contacts}
              />
            </div>
          </div>
          <CurrentChat messages={userMessages} />
        </div>
      </div>
    </Container>
  );
}

export default Chat;
