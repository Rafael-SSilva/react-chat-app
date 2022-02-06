import { User } from "firebase/auth";
import React, { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";

export interface IContext extends User {
  authenticate: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  signUpUser: (username: string, email: string, pass: string) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  resetPassword: (email: string) => Promise<void>;
  confirmPassReset: (code: string, newPassword: string) => Promise<void>;
}

export interface IAuthProvider {
  children: any;
}
