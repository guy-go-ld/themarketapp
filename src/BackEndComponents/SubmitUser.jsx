import {addDoc} from "firebase/firestore";
import {auth} from "../config/firebase";

export const onSubmitUser = async (usersCollectionRef,
                            newUserAge,
                            newUserFirstName,
                            newUserLastName,
                            newUserLocation,
                            newUserPass) => {
    try {
        await addDoc(usersCollectionRef, {
            Age: newUserAge,
            FirstName: newUserFirstName,
            LastName: newUserLastName,
            Location: newUserLocation,
            password: newUserPass,
            userId: auth?.currentUser?.uid,
        });
    }catch (err)
    {
        console.log(err);
    }

}