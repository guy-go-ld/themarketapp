import {auth, googleProvider} from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {useState} from "react";
export const Auth = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signIn = async ()=>{
        try
        {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
        handleRefresh();
    };

    const signInWithGoogle = async ()=>{
        try
        {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
        handleRefresh();
    };

    const logout = async() =>{
        try
        {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
        handleRefresh();

    }

    const handleRefresh = () => {
        window.location.reload();
    };
    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e)=> setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Log out</button>
            <p>{auth?.currentUser?.email}</p>
        </div>
    )
}