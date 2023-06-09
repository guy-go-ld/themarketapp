import React, { useState } from "react";
import User from "../Classes/UserClass";
import {signOut} from "firebase/auth";
import {auth} from "../config/firebase";


// export default function userRegistration(){
    export default function UserRegistrationForm () {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            const user = new User(name, email, password);
            user.signIn();
        };
        const logout = async() =>{
            try
            {
                await signOut(auth);
            } catch (err) {
                console.error(err);
            }
        }
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                <button onClick={logout}>Log out</button>

            </form>
        );

    };




