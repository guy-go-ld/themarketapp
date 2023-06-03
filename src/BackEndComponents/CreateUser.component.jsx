import {useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {auth, db, storage} from "../config/firebase";
import {ref, uploadBytes} from "firebase/storage";
import {onSubmitUser} from "./SubmitUser";
import User from "../Classes";


export default function CreateUser()
{
    // New User States
    const [ newUserAge, setNewUserAge] = useState(0);
    const [ newUserFirstName, setNewUserFirstName] = useState("");
    const [ newUserLastName, setNewUserLastName] = useState("");
    const [ newUserLocation, setNewUserLocation] = useState([0,0]);
    const [ newUserPass, setNewUserPass] = useState(0);

    // Update User First Name State
    const [userFirstName, setUserFirstName] = useState("");

    // File Upload State
    const [file, setFile] = useState(null);

    // List of all Users
    const [userList, setUserList] = useState([]);
    const usersCollectionRef = collection(db, "Users");

    const getUserList = async () => {
        // READ THE DATA
        // SET THE MOVIE LIST
        try
        {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map((doc) =>
                ({...doc.data(), id: doc.id,})
            );
            setUserList(filteredData);
            console.log(filteredData[0]["Age"]);
            console.log(filteredData);
        } catch (err){
            console.error(err);
        }
    }

    useEffect(()=>{

        getUserList();
    }, []);
    const onSubmitUser = async () => {
        try {

            await addDoc(usersCollectionRef, {
                Age: newUserAge,
                FirstName: newUserFirstName,
                LastName: newUserLastName,
                Location: newUserLocation,
                password: newUserPass,
                userId: auth?.currentUser?.uid,
            });
            await getUserList();
        }catch (err)
        {
            console.log(err);
        }

    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "Users", id);
        await deleteDoc(userDoc);
        await getUserList();
    }

    const updateUserFirstName = async (id) => {
        const userDoc = doc(db, "Users", id);
        await updateDoc(userDoc, { FirstName: userFirstName });
        await getUserList();
    };

    const uploadFile = async () => {
        if (!file) return;
        const filesFolderRef = ref(storage, `projectFiles/${file.name}`);
        try{
            await uploadBytes(filesFolderRef, file);

            console.log(file);
        } catch (err){
            console.log(err);
        }

    }

    return(<div>
        <p><input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}/>
            <button onClick={uploadFile}> Upload File</button>
        </p>
        List len: {userList.length}
        <p></p>
        <input placeholder="First Name..." onChange={(e) => setNewUserFirstName(e.target.value)}/>
        <input placeholder="Last Name..." onChange={(e) => setNewUserLastName(e.target.value)}/>
        <input placeholder="Password..." onChange={(e) => setNewUserPass(e.target.value)}/>
        <input placeholder="Age..." onChange={(e) => setNewUserAge(Number(e.target.value))}/>
        <input placeholder="Location..." onChange={(e) => setNewUserLocation(e.target.value)}/>
        <button onClick={onSubmitUser}> Sign In!</button>
        <p></p>
        {userList.map((user) => (
            <div>
                <p> Name: {user.FirstName} {user.LastName}
                    <input onChange={(e) => setUserFirstName(e.target.value)}/>
                    <button onClick={() => updateUserFirstName(user.id)}>update first name</button>
                </p>
                <button onClick={() => deleteUser(user.id)}>
                    Delete User?
                </button>
            </div>
        ))}
        <p></p>

    </div>);
}
