import app from "../config";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import addData from "@/firebase/firestore/addDoc";
const auth = getAuth(app);

export default async function signUp(email: string, password: string, rest: Object) {
  debugger;
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    await addData('users', result.user.uid, { email: email, ...rest })
  } catch (e) {
    error = e;
  }

  return { result, error };
}
