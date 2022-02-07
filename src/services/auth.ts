import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export async function loginRequest(email: string, password: string) {
  try {
    const request = await signInWithEmailAndPassword(auth, email, password);
    return request.user;
  } catch (error) {
    return null;
  }
}

export function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function logoutRequest() {
  const unsigned = await signOut(auth);

  return unsigned;
}
