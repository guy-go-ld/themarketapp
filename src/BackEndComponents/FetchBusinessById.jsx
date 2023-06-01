import {doc, getDoc} from "firebase/firestore";
import {db} from "../config/firebase";


export async function FetchBusinessById({id})
{
    const docRef = doc(db, "Business", id);
    // if (docSnap.exists())
    // {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    return await getDoc(docRef);
}