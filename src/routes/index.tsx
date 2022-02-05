import React from "react";
import { Route, Routes as RDRouter } from "react-router-dom";
import useAuth from "../context/AuthProvider/useAuth";
import Chat from "../pages/Chat/Chat";
import Login from "../pages/Login/Login";
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
    </RDRouter>
  );
}

export default Routes;
