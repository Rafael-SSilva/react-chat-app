import React from "react";
import useAuth from "../context/AuthProvider/useAuth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes() {
  const auth = useAuth();

  return !auth.email ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
