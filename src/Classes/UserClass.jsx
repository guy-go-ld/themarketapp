import {auth, db, storage, timestamp} from "../config/firebase";
import "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
// import {auth} from "./config/firebase";

export default class User
{
    // TODO as little as I can
    constructor(name, email, password, userID_ = auth?.currentUser?.uid, review = []) {

        this.name_ = name;
        this.email_ = email;
        this.password_= password;
        // this.profile_  = "";
        // this.circles = [];
        // this.b_day = "";
        this.userID_ = userID_;
        this.reviews = review // TODO: list of dictionaries that contains the fields - businessID, timestamp, reviewContent

    }

    signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, this.email_, this.password_, this.name_).then(async cred => {
                this.userID_ = cred.user.uid;
                const ref = doc(db, "Users", cred.user.uid).withConverter(userConverter);
                await setDoc(ref, this);
            });
        } catch (err) {
            console.error(err);
        }
    };

    toString() {
        return "the user name is: "+this.name_ + ", the user ID is: " + this.userID_;
    }

    async addBusinessReview(businessID, reviewContent, rating) {
        const review = {
            businessID: businessID,
            content: reviewContent,
            rating: rating,
            timestamp: timestamp.now().toDate(),
        };
        this.reviews.push(review);
        console.log("Review added: ", review);
        await this.saveToFirebase();
    }
    async saveToFirebase() {
        const ref = doc(db, "Users", this.userID_).withConverter(userConverter);
        await setDoc(ref, this);
    }

}

export async function getUserById(id) {
    const ref = doc(db, "Users", id).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        // Convert to User object
        const user = docSnap.data();
        // Use a City instance method
        return user;
    } else {
        console.log("No such document!");
        return null;
    }

}
const signIn = async (name, email, password)=>{
    try
    {
        await createUserWithEmailAndPassword(auth, email, password, name).then(async cred => {
            // Adds a user with the same uid
            await setDoc(doc(db, "Users", cred.user.uid),
                {
                    FirstName: name,
                    email: email,
                    password: password,
                    userID: cred.user.uid,
                    reviews: []
                });
            // console.log("id: ", this.userID_, "name: ", this.name_);

        });
    } catch (err) {
        console.error(err);
    }
    // handleRefresh();
};

const userConverter = {
    toFirestore(user) {
        return {
            FirstName: user.name_,
            email: user.email_,
            password: user.password_,
            userID: user.userID_,
            reviews: user.reviews
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new User(data.FirstName, data.email, data.password, data.userID, data.reviews);
    },
};


