import {Stack, Typography} from "@mui/material";
import {
    StyledAvatarUserFeed,
    StyledBusinessFeed, StyledButtonGray,
    StyledRating,
    StyledSmallCirclesButton,
    StyledTypographyReview
} from "./styledComponents";
import StyledGrayButtonFullReview from "./StyledGrayButtonFullReview";
import StyledGrayButtonVisitBusiness from "./StyledGrayButtonVisitBusiness";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import {useState} from "react";

export default function StyledFeedItem({user_name="name", profile_photo_url="",
                                       circles = [], time="24hrs",
                                       business_name="name", business_photo_url="none",
                                       rating=5, url_to_business="", review="",
                                       review_address})
{

    const [open, setOpen] =  useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const [userName, setUserName] = useState("default name");
    // const userRef = doc(db, "Users", auth?.currentUser?.uid);
    // const fetch = async () =>
    // {
    //     const userSnap = await getDoc(userRef);
    //     if (userSnap.exists())
    //     {
    //         // console.log(userSnap.data());
    //         setUserName(userSnap.get("FirstName"));
    //     }
    //     else{
    //         console.log("err");
    //     }
    // }
    // Getting the document from the database
    // fetch();

    return (
        <box>
            <Stack direction="column" spacing={2} sx={{padding:"0.4rem", boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', borderBottom: '0.1rem solid #C3ED5B'}}>
                <item>
                    <Stack direction="row" spacing={1}>
                        <item>
                            {(profile_photo_url==="") ?
                                (<StyledAvatarUserFeed/>) :
                                (<StyledAvatarUserFeed src={profile_photo_url}/>)
                            }
                        </item>
                        <item>
                            <Stack direction="column" justifyContent="center" alignItems="flex-start">
                                <Typography variant="h4"> {/*{userName}*/} {user_name} </Typography>
                                <Typography variant="h5">{time}</Typography>
                            </Stack>
                        </item>
                        <item>
                            <StyledSmallCirclesButton/>
                        </item>
                    </Stack>
                </item>
                <item>
                    <Stack direction = "column" spacing={2}>
                        <Stack direction = "row" spacing={1} justifyContent="flex-start" alignItems="center">
                            <Typography variant="h3" textAlign="left">Static  Name</Typography>
                            <StyledRating value={rating}/>
                        </Stack>
                        <Stack direction = "row" spacing={1} justifyContent="flex-start" alignItems="center">
                            <StyledBusinessFeed/>
                            <Stack direction = "column" justifyContent="flex-start" spacing={1}>
                                <item>
                                    <StyledTypographyReview>
                                        {/*veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse*/}
                                        {review}
                                    </StyledTypographyReview>
                                </item>
                                <item>
                                    <Stack direction = "row" spacing = {0.5}>
                                        <StyledGrayButtonFullReview/>
                                        <StyledGrayButtonVisitBusiness/>
                                    </Stack>
                                </item>
                            </Stack>
                        </Stack>

                    </Stack>
                </item>
            </Stack>

        </box>
    )
}