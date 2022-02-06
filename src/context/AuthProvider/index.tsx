import {
  User,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  setDoc,
} from "firebase/firestore";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { createUser, loginRequest, logoutRequest } from "../../services/auth";
import { auth, db } from "../../services/firebase";
import { IContext, IAuthProvider } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setLoading(false);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsub();
    };
  }, [user, auth]);

  async function signUpUser(username: string, email: string, password: string) {
    const response = await createUser(email, password);
    await updateProfile(auth.currentUser as User, {
      displayName: username,
    });
    if (response) {
      await addDoc(collection(db, "users"), {
        username,
        avatar: "",
        email: response.email,
        online: false,
        uuid: response.uid,
      });
      setUser(response);
    }
  }

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    if (response) {
      setUser(response);
    }
  }

  async function logout() {
    logoutRequest().then(() => {
      setUser(null);
    });
  }

  async function resetPassword(email: string) {
    const actionCodeSettings = {
      url: "http://localhost:3000/resetconfirmation",
      handleCodeInApp: true,
    };
    return sendPasswordResetEmail(auth, email, actionCodeSettings);
  }

  async function confirmPassReset(code: string, newPassword: string) {
    return confirmPasswordReset(auth, code, newPassword);
  }

  const value = useMemo(
    () => ({
      ...user,
      authenticate,
      logout,
      signUpUser,
      loading,
      setLoading,
      resetPassword,
      confirmPassReset,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
