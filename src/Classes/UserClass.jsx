import {auth, db, timestamp} from "../config/firebase";
import "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {getBusinessByName} from "./BusinessClass";
// import {auth} from "./config/firebase";

export default class User
{
    // TODO as little as I can
    constructor(name, email, password, userID_ = auth?.currentUser?.uid, review = [],
                footprint = [], circles = [], friends = [], profile_pic="") {

        this.name_ = name;
        this.email_ = email;
        this.password_= password;
        this.profile_pic  = "";
        // this.circles = [];
        // this.b_day = "";
        this.userID_ = userID_;
        this.reviews = review; // TODO: list of dictionaries that contains the fields - businessID, timestamp, reviewContent
        this.footprints = footprint;
        this.circles = circles;
        this.friends = friends;
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
        // console.log("Review added: ", review);
        await this.saveToFirebase();
    }

    async addBusinessFootprint(businessID, rating) {
        const footprint = {
            businessID: businessID,
            rating: rating,
            timestamp: timestamp.now().toDate(),
        };
        this.footprints.push(footprint);
        console.log("footprint added: ", footprint);
        await this.saveToFirebase();
    }

    async saveToFirebase() {
        const ref = doc(db, "Users", this.userID_).withConverter(userConverter);
        await setDoc(ref, this);
    }

    static async getUserFriendsById(id)
    {
        const user = await getUserById(id);
        return user?.friends;
    }
    static async getFriendsReviews(userID)
    {
        const friends_id = await User.getUserFriendsById(userID);
        let listOfReviews = [];
        if (friends_id.length > 0)
        {
            for (const friend_id of friends_id) {
                const friend = await getUserById(friend_id);
                if (friend !== null)
                {
                    for (const review of friend.reviews)
                    {
                        const business = await getBusinessByName(review.businessID);
                        listOfReviews.push(User.feedItemConverter(friend, review, business));
                    }
                }
                else
                {
                    console.error("Error getting friend from database!");
                    return listOfReviews;
                }
            }
        }
        else{
            console.log("Ain't got no friends!");
        }
        return listOfReviews;
    }
    static feedItemConverter(user, review, business)
    {

        return {user_name: user.name_, profile_photo_url: user.profile_pic,
            circles: user.circles, time: review.timestamp.toDate(),
            business_name: business.name, business_photo_url: business.profilePic,
            rating: (business.rating[0]/ business.rating[1]),
            url_to_business: business.id, review:review.content,
            review_address: review.content}
    }
}



export async function getUserById(id) {
    const ref = doc(db, "Users", id).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        // Convert to User object and return it
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }

}

export async function getUserCircles(id) {
    const user = await getUserById(id);
    return user.circles


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
                    reviews: [],
                    footprints: [],
                    circles: []
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
            reviews: user.reviews,
            footprints: user.footprints,
            circles: user.circles,
            friends: user.friends
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new User(data.FirstName, data.email, data.password, data.userID, data.reviews, data.footprints, data.circles, data.friends);
    },
};


