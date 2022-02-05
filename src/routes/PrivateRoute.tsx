import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/AuthProvider/useAuth";

function PrivateRoute({ children }: { children: any }) {
  const userCtx = useAuth();
  const location = useLocation();

  if (userCtx.loading) {
    return <h1>Loading...</h1>;
  }

  if (!userCtx.email) {
    return <Navigate to="/signin" state={{ location }} replace />;
  }

  return children;
}

export default PrivateRoute;
