import {
  User,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, DocumentData, setDoc, updateDoc } from "firebase/firestore";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { createUser, loginRequest, logoutRequest } from "../../services/auth";
import { auth, db } from "../../services/firebase";
import { IContext, IAuthProvider } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState({ active: false, message: "" });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (authUser) => {
      setLoading(false);
      if (authUser) {
        setUser(authUser);
        if (authUser.email) {
          await updateDoc(doc(db, "users", authUser.uid), {
            online: true,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsub();
    };
  }, [user, auth]);

  async function signUpUser(username: string, email: string, password: string) {
    try {
      const response = await createUser(email, password);
      await updateProfile(auth.currentUser as User, {
        displayName: username,
      });
      await setDoc(doc(db, "users", response.user.uid), {
        username,
        avatar: "",
        email: response.user.email,
        online: false,
        uuid: response.user.uid,
      });
      setUser(response);
      return { user: response };
    } catch (error) {
      return { error };
    }
  }

  async function authenticate(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function setOnline(isOnline: boolean) {
    await updateDoc(doc(db, "users", user.uid), {
      online: isOnline,
    });
  }

  async function logout() {
    logoutRequest().then(() => {
      setOnline(false);
      setUser((prev: DocumentData) => ({ ...prev, online: false }));
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
      authError,
      setAuthError,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
