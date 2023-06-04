import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import {
    StyledCircleBox,
    StyledDialogInputBusiness,
    StyledDialogReviewIcon,
    StyledDialogSecondTitle, StyledDialogTextFieldReview,
    StyledDialogTitle, StyledRating
} from "./styledComponents";
import {useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {Button, DialogActions, DialogContent, DialogContentText, Stack, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {auth, db} from "../config/firebase";
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore";
import Box from "@mui/material/Box";
import theme from "../Theme/Theme";
import {getUserById} from "../Classes/UserClass";
// import User from "../Classes";
// import getUserById from "../Classes";


export default function StyledCircleReview() {
    const [open, setOpen] = useState(false);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    let [businessData, setBusinessData] = useState(null);
    let business_id = "P9cLIqC367iuRjeozkxq";
    let docRef = doc(db, "Business", "P9cLIqC367iuRjeozkxq");
    let docSnap = null;
    // console.log(business_id);
    // console.log(auth?.currentUser.uid);
    const handleClickOpen = () => {
        if (business_id !== "") {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const fetch = async () => {
        docSnap = await getDoc(docRef);
        setBusinessData(docSnap.data());
    }
    // Getting the document from the database
    fetch();

    const HandleSend = async () => {
        docSnap = await getDoc(docRef);
        const user = await getUserById(auth?.currentUser?.uid);
        if (docSnap.exists()) {
            await user.addBusinessReview('PHVzalLwhzSNUaIrUZsIeEC8yoP2', review, rating)
        }


        handleClose();
    }

    return (
        <Box>
            <StyledCircleBox onClick={handleClickOpen}>
                <RateReviewOutlinedIcon sx={{
                    fontSize: "3.5rem",
                    margin: "auto",
                    color: "white",
                    width: "3.125rem !important",
                    height: "3.125rem",
                }}/>
            </StyledCircleBox>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent sx={{
                    backgroundColor: `${theme.palette.primary.main}`,
                    border: `0.2rem solid ${theme.palette.secondary.main}`
                }}>
                    <Stack direction="column" spacing={2}>
                        <Stack direction="row"
                               justifyContent="center"
                               alignItems="center"
                               spacing={1}>
                            <StyledDialogReviewIcon/>
                            <StyledDialogTitle>New Review</StyledDialogTitle>
                        </Stack>
                        <Stack direction="column">
                            <StyledDialogSecondTitle>I went to..</StyledDialogSecondTitle>
                            <StyledDialogInputBusiness placeholder={"where did you go???!"}/>
                        </Stack>
                        <Stack direction="column">
                            <StyledDialogSecondTitle>It was..</StyledDialogSecondTitle>
                            <StyledRating
                                value = {rating}
                                onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            />
                        </Stack>
                        <Stack direction="column">
                            <StyledDialogSecondTitle>And I thought it was..</StyledDialogSecondTitle>
                            <StyledDialogTextFieldReview
                                multiline
                                rows={4}
                                id="name"
                                label="Your Awesome Review"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={review}
                                onChange={e => setReview(e.target.value)}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                            <DialogActions>
                                <Button onClick={handleClose}
                                        sx={{backgroundColor: `${theme.palette.secondary.main}`}}>Cancel</Button>
                                <Button onClick={HandleSend} sx={{backgroundColor: `${theme.palette.secondary.main}`}}>Send
                                    Review</Button>
                            </DialogActions>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog>
        </Box>
    );
}