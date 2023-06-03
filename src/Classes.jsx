import {auth, db, storage} from "./config/firebase";
import "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
// import {auth} from "./config/firebase";

export default class User
{
    // TODO as little as I can
    constructor(name, email, password) {

        this.name_ = name;
        this.email_ = email;
        this.password_= password;
        // this.profile_  = "";
        // this.circles = [];
        // this.b_day = "";
        this.userID_ = auth?.currentUser?.uid;
        this.reviews = [] // TODO: list of dictionaries that contains the fields - businessID, timestamp, reviewContent

    }

    // register() {
         signIn = async ()=>{
            try
            {
                await createUserWithEmailAndPassword(auth, this.email_, this.password_, this.name_).then(async cred => {
                    // Adds a user with the same uid
                    await setDoc(doc(db, "Users", cred.user.uid),
                        {
                            FirstName: this.name_,
                            email: this.email_,
                            password: this.password_,
                            userID: this.userID_,
                            reviews: this.reviews
                        });
                    console.log("id: ", this.userID_, "name: ", this.name_);

                });
            } catch (err) {
                console.error(err);
            }
            // handleRefresh();
        };
        // auth?.createUserWithEmailAndPassword(this.email_, this.password_)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log("User registered:", user);
        //         // You can save additional user data to Firestore or perform other actions here
        //     })
        //     .catch((error) => {
        //         console.error("Error registering user:", error);
        //     });
    // }
    toString() {
        return "the user name is: "+this.name_ + ", the user ID is: " + this.userID_;
    }

    addBusinessReview(businessID, reviewContent) {
        const review = {
            businessID: businessID,
            content: reviewContent,
            // timestamp: timestamp,
        };
        this.reviews.push(review);
        console.log("Review added: ", review);
    }

    saveToFirebase() {
        // const db = firebase.firestore();
        const userRef = db.collection("Users").doc(this.userID_);
        userRef.withConverter(userConverter).set(this)
            .then(() => {
                console.log("User data updated successfully");
            })
            .catch((error) => {
                console.error("Error updating user data: ", error);
            });
    }

}

const userConverter = {
    toFirestore(user) {
        return {
            name: user.name_,
            reviews: user.reviews,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new User(data.name_, data.reviews, snapshot.id);
    },
};

// export function addBusinessReview(businessID, reviewContent, user) {
//     const review = {
//         businessID: businessID,
//         content: reviewContent,
//         // timestamp: timestamp,
//     };
//     user.reviews.push(review);
//     console.log("Review added: ", review);
// }

export const getUserById = (userId) => {

    const usersRef = db.collection("Users");

    return usersRef
        .doc(userId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                return {
                    id: doc.id,
                    ...userData,
                };
            } else {
                console.log("user not found")
                return null; // User not found
            }
        })
        .catch((error) => {
            console.error("Error getting user:", error);
            return null;
        });
};


// class Business_
// {
//
// }