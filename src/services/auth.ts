import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export async function loginRequest(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function logoutRequest() {
  const unsigned = await signOut(auth);

  return unsigned;
}
