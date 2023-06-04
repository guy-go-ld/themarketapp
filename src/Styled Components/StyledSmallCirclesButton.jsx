import {
    StyledDialogFootprintIcon, StyledDialogInputBusiness,
    StyledDialogSecondTitle,
    StyledDialogTitle, StyledRating,
    StyledSmallCirclesButton, StyledCirclesIcon
} from "./styledComponents";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import {getUserById, getUserCircles} from "../Classes/UserClass";
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, Stack} from "@mui/material";
import theme from "../Theme/Theme";

export default async function StyledSmallCircleButton(userID) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const userCirclesList = getUserCircles(userID);


    return (
        <Box>
            <StyledSmallCirclesButton onClick={handleClickOpen}/>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent sx={{
                    backgroundColor: `${theme.palette.primary.main}`,
                    border: `0.2rem solid ${theme.palette.secondary.main}`
                }}>
                    <Stack direction="column" spacing={2}>
                        {(await userCirclesList)().then((list) => {
                            list.map((circle) =>
                                <Stack direction="row"
                                       justifyContent="center"
                                       alignItems="center"
                                       spacing={1}>
                                    <StyledCirclesIcon/>
                                    <StyledDialogTitle>{circle}</StyledDialogTitle>
                                </Stack>
                            )
                        })}

                    </Stack>
                </DialogContent>

            </Dialog>


        </Box>
    )


}