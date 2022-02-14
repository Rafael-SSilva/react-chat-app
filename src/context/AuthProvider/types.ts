import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import React, { Dispatch, SetStateAction } from "react";

export interface IContext extends User {
  authenticate: (email: string, pass: string) => Promise<DocumentData>;
  logout: () => void;
  signUpUser: (
    username: string,
    email: string,
    pass: string
  ) => Promise<DocumentData | any>;
  loading: boolean;
  getError: any;
  uuid: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  resetPassword: (email: string) => Promise<void>;
  confirmPassReset: (code: string, newPassword: string) => Promise<void>;
  authError: { message: string; active: boolean };
  setAuthError: Dispatch<SetStateAction<{ message: string; active: boolean }>>;
  online: boolean;
}

export interface IAuthProvider {
  children: any;
}
