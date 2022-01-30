import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
