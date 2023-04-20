import app from "../config";
import { getFirestore, doc, collection, getDoc, getDocs } from "firebase/firestore";

const db = getFirestore(app);
export default async function getDoument(collectionName, id = null) {
  let collectionRef = await collection(db, collectionName);
  let docRef = id == "" || id == null ? collectionRef : doc(db, collectionName, id);

  let result = null;
  let error = null;
  let data = [];

  try {
    result = id == "" || id == null ? await getDocs(docRef) : await getDoc(docRef);
    result.docs.forEach((doc) => {
      let temp = {id:doc.id, ...doc.data()}
      data.push(temp);
    });
    
  } catch (e) {
    error = e;
  }

  return { result, error, data };
}
