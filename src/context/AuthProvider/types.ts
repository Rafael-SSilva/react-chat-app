import { User } from "firebase/auth";
import React from "react";
import { JsxElement } from "typescript";

export interface IContext extends User {
  authenticate: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: any;
}
