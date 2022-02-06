import React from "react";
import { Route, Routes as RDRouter } from "react-router-dom";
import useAuth from "../context/AuthProvider/useAuth";
import Chat from "../pages/Chat/Chat";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Login from "../pages/Login/Login";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  const auth = useAuth();

  return (
    <RDRouter>
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset" element={<ForgotPassword />} />
      <Route path="/resetconfirmation" element={<PasswordReset />} />
    </RDRouter>
  );
}

export default Routes;
