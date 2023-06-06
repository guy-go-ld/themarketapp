import {auth, db, googleProvider} from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {useState} from "react";
import {getAnalytics, setUserProperties} from "firebase/analytics";
import {doc, setDoc, collection} from "firebase/firestore";


export const Auth = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usersCollectionRef = collection(db, "Users");
    // console.log(auth?.currentUser?.email);
    const signIn = async ()=>{
        try
        {
            await createUserWithEmailAndPassword(auth, email, password).then(async cred => {
                // Adds a user with the same uid
                await setDoc(doc(db, "Users", cred.user.uid),
                    {
                    FirstName: email,
                    password: password,
                });

            });
        } catch (err) {
            console.error(err);
        }
        // handleRefresh();
    };
    const LogIn = async() => {
        try
        {
            await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>
            {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
        } catch (err) {
            console.error(err);
        }
    };
    const signInWithGoogle = async ()=>{
        try
        {
            await signInWithPopup(auth, googleProvider).then(async cred =>{
                await setDoc(doc(db, "Users", cred.user.uid),
                    {
                        FirstName: cred.user.displayName,
                        ProfilePhoto: cred.user.photoURL,
                    });
            });

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
    const user = auth?.currentUser;
    if (user)
    {
        user.displayName = 'Yuval Lavie';
        const analytics = getAnalytics();
        setUserProperties(analytics, { geoLocation: [0,0] });
        user.geoLocation = [5,5];
        // Update the user's profile ??

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
            <button onClick={LogIn}>Log In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Log out</button>
            <p>{auth?.currentUser?.email}</p>
            <p>{auth?.currentUser?.phoneNumber}</p>
            <p>{auth?.currentUser?.geoLocation}</p>

            <p>hello</p>
        </div>
    )
}

export const LogIn = async(email, password) => {
    try
    {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>
        {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        })
    } catch (err) {
        console.error(err);
    }
};