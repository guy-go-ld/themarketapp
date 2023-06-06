import {useEffect, useState} from "react";
import User from "../Classes/UserClass";
import {auth} from "../config/firebase";
import Box from "@mui/material/Box";
export default function FeedItemPage()
{

    useEffect(() => {
        getFriendsReviewsHelper()
    }, [])


    const [listReviews, setListReviews] = useState([]);
    const getFriendsReviewsHelper = ()=> {
        User.getFriendsReviews(auth?.currentUser?.uid).then((lst) => {
            setListReviews(lst);
            console.log(lst);
            // console.log(lstBusiness);
        }).catch((error) => {
            console.error(error);
        });
    }

    return(<Box>

        {listReviews.map((review) =>
          <p>{review.content}</p>)}
        <p>YEERTAR</p>
    </Box>)
}