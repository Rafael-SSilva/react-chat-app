import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { createUser, loginRequest, logoutRequest } from "../../services/auth";
import { auth } from "../../services/firebase";
import { IContext, IAuthProvider } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsub();
    };
  }, [user, auth]);

  async function signUpUser(email: string, password: string) {
    const response = await createUser(email, password);
    setUser(response);
  }

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    setUser(response);
  }

  async function logout() {
    logoutRequest().then(() => {
      setUser(null);
    });
  }

  const value = useMemo(
    () => ({ ...user, authenticate, logout, signUpUser, loading, setLoading }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
