import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest, logoutRequest } from "../../services/auth";
import { auth } from "../../services/firebase";
import { IContext, IAuthProvider } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | any>();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    setUser(response);
  }

  async function logout() {
    const navigate = useNavigate();

    logoutRequest().then(() => {
      setUser(null);
      navigate("/signin");
    });
  }

  const value = useMemo(() => ({ ...user, authenticate, logout }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
