import app from "../config";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";


export default async function addData(collectionName, id, data) {
    debugger;
    const db = await getFirestore(app);
    let result = null;
    let error = null;
    let collectionRef = null;

    try {
        collectionRef = id == "" || id == null ? await collection(db, collectionName) : await doc(db, collectionName, id);
        const newDoc = id == '' || id == null ? doc(collectionRef) : collectionRef;
        result = await setDoc(newDoc, data, {
            merge: true,
        });

    } catch (e) {
        error = e;
    }

    return { result, error, collectionRef };
}
