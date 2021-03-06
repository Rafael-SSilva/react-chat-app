import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import CurrentChat from "./CurrentChat/CurrentChat";
import Container from "./styles";
import Users from "./Users/Users";
import SearchInput from "./SearchInput/SearchInput";
import useAuth from "../../context/AuthProvider/useAuth";
import { db } from "../../services/firebase";
import Spinner from "../../components/Spinner/Spinner";

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
  const [contacts, setContacts] = useState<string[]>([]);
  const [usersSearch, setUsersSearch] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [activeUser, setActiveUser] = useState<DocumentData | null>(null);
  const [chatId, setChatId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const userAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveUser(null);
    userAuth.setLoading(true);

    let unsub: any = null;

    (async () => {
      const q = query(collection(db, "users", userAuth.uid, "contacts"));

      unsub = onSnapshot(q, (snapshot) => {
        const userList: string[] = [];
        snapshot.forEach((usr) => {
          userList.push(usr.id);
        });
        if (userList.length) {
          setContacts(userList);
        }
        userAuth.setLoading(false);
      });
    })();

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    setUsersSearch([]);
    setSearch("");
  }, [activeTab]);

  const handleSearch = async () => {
    if (!search.trim()) {
      setUsersSearch([]);
    } else {
      const q = query(
        collection(db, "users"),
        where("uuid", "!=", userAuth.uid)
      );
      const querySnapshot = await getDocs(q);
      const userList: any = [];
      querySnapshot.forEach((snap) => {
        userList.push(snap.data());
      });
      setUsersSearch(
        userList.map((x: DocumentData) => {
          if (x.username.includes(search) || x.email.includes(search)) {
            return x.uuid;
          }
          return null;
        })
      );
    }
  };

  const handleLogout = async () => {
    await userAuth.logout();
    navigate("/signin");
  };

  const activeChatCB = async (userActive: DocumentData) => {
    setLoading(true);
    const id =
      userAuth.uid > userActive.uuid
        ? userAuth.uid + userActive.uuid
        : userActive.uuid + userAuth.uid;
    await setDoc(doc(db, "messages", id), {});

    const docSnap = await getDoc(
      doc(db, "users", userAuth.uid, "contacts", userActive.uuid)
    );

    if (!docSnap.exists()) {
      await setDoc(
        doc(db, "users", userAuth.uid, "contacts", userActive.uuid),
        {}
      );
    }

    setChatId(id);
    setActiveUser(userActive);
    setLoading(false);
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
                users={activeTab === "chat" ? contacts : usersSearch}
                activeUser={activeUser}
              />
            </div>
          </div>
          {activeUser ? (
            <CurrentChat user={activeUser} chatId={chatId} />
          ) : (
            <div className="empty-chat" />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Chat;
