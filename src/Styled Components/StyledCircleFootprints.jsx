import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import {
    StyledCircleBox,
    StyledDialogInputBusiness,
    StyledDialogReviewIcon, StyledDialogFootprintIcon,
    StyledDialogSecondTitle, StyledDialogTextFieldReview,
    StyledDialogTitle, StyledRating
} from "./styledComponents";
import {ReactComponent as FootprintsIcon} from "../Icons/footprints-svgrepo-com.svg";
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, Stack} from "@mui/material";
import theme from "../Theme/Theme";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import {getUserById} from "../Classes/UserClass";

export default function StyledCircleFootprint(){

    const [open, setOpen] = useState(false);
    // const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    let [businessData, setBusinessData] = useState(null);
    let business_id = "P9cLIqC367iuRjeozkxq";
    let docRef = doc(db, "Business", "P9cLIqC367iuRjeozkxq");
    let docSnap = null;

    const handleClickOpen = () => {
        if (business_id !== "") {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const HandleSend = async () => {
        docSnap = await getDoc(docRef);
        const user = await getUserById(auth?.currentUser?.uid);
        if (docSnap.exists()) {
            await user.addBusinessFootprint('PHVzalLwhzSNUaIrUZsIeEC8yoP2', rating)
        }
        handleClose();
    }


    return(
        <Box>
            <StyledCircleBox onClick={handleClickOpen}>
                <FootprintsIcon width="3.5rem" height="3.5rem" sx={{
                    fontSize:"3rem",
                    margin:"auto",
                    fill:"white",
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
                            <StyledDialogFootprintIcon/>
                            <StyledDialogTitle>New Footprint</StyledDialogTitle>
                        </Stack>
                        <Stack direction="column">
                            <StyledDialogSecondTitle>I went to..</StyledDialogSecondTitle>
                            <StyledDialogInputBusiness placeholder={"Business Name"}/>
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
                        {/*<Stack direction="column">*/}
                        {/*    <StyledDialogSecondTitle>And I thought it was..</StyledDialogSecondTitle>*/}
                        {/*    <StyledDialogTextFieldReview*/}
                        {/*        multiline*/}
                        {/*        rows={4}*/}
                        {/*        id="name"*/}
                        {/*        label="Your Awesome Review"*/}
                        {/*        type="email"*/}
                        {/*        fullWidth*/}
                        {/*        variant="standard"*/}
                        {/*        value={review}*/}
                        {/*        onChange={e => setReview(e.target.value)}*/}
                        {/*    />*/}
                        {/*</Stack>*/}
                        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                            <DialogActions>
                                <Button onClick={handleClose}
                                        sx={{backgroundColor: `${theme.palette.secondary.main}`}}>Cancel</Button>
                                <Button onClick={HandleSend} sx={{backgroundColor: `${theme.palette.secondary.main}`}}>Send
                                    Footprint</Button>
                            </DialogActions>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog>

        </Box>
    );
}