import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

function AuthRequired() {
  const location = useLocation();

  return <Navigate to="/signin" state={{ from: location }} replace />;
}

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<AuthRequired />} />
    </Routes>
  );
}

export default AuthRoutes;
