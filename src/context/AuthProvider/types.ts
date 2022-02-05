import { User } from "firebase/auth";
import React, { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";

export interface IContext extends User {
  authenticate: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  signUpUser: (email: string, pass: string) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IAuthProvider {
  children: any;
}
