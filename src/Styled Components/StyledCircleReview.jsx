import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import {StyledCircleBox} from "./styledComponents";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {Button, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import TextField from "@mui/material/TextField";
import {auth, db} from "../config/firebase";
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore";



export default function StyledCircleReview({business_id = ""})
{
    const [open, setOpen] =  useState(false);
    const [review, setReview] = useState("");
    let [businessData, setBusinessData] = useState(null);
    let docRef = doc(db, "Business", "P9cLIqC367iuRjeozkxq");
    let docSnap = null;
    // console.log(business_id);
    // console.log(auth?.currentUser.uid);
    const handleClickOpen = () => {



        if (business_id !== "")
        {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const fetch = async () =>
    {
        docSnap = await getDoc(docRef);
        // console.log(docSnap.get("Reviews") !== []);
        // if (docSnap.exists()){console.log("Document data:", docSnap.data());}
        // else { // docSnap.data() will be undefined in this case
        //     console.log("No such document!");}

        setBusinessData(docSnap.data());
    }
    // Getting the document from the database
    fetch();

    const handleSend = async () => {
        docSnap = await getDoc(docRef);
        const uid = auth?.currentUser?.uid;
        if (docSnap.exists())
        {
            console.log("SENDING");
            // await updateDoc(docRef, {[`Reviews.${uid}`] : review}, {merge: true});
        }
        handleClose();
    }

    return(
        <div>
        <StyledCircleBox onClick={handleClickOpen}>
            <RateReviewOutlinedIcon sx={{
                fontSize:"3.5rem",
                margin:"auto",
                color:"white",
                width:"3.125rem !important",
                height:"3.125rem",
            }}/>
        </StyledCircleBox>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Cool! Thank you for adding review for the business: __business_name__
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Your Awesome Review"
                    type="email"
                    fullWidth
                    variant="standard"
                    value = {review}
                    onChange={e=> setReview(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSend}>Send Review</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}