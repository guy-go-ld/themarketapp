import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export interface SimpleDialogProps {
    open: boolean;
    name: string;
    review: string;
    onClose: (value: Number) => void;

}

function SimpleDialog(props: SimpleDialogProps) {
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>
                <Typography variant="h4">
                {props.name}'s Review:
                </Typography>
                </DialogTitle>
            <Typography variant="h5" style={{padding: 10, paddingBottom:10, }}>{props.review} </Typography>
            <FormatQuoteIcon sx={{fontSize:100, alignSelf: "center", color: "primary.main"}}/>

        </Dialog>
    );
}

export default function ReviewDialogComponent({business_person}) {
    const [open, setOpen] = React.useState(false);
    const review = business_person.reviews[business_person.id];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };
    return (
        <div>
            <Button color="primary"
                    disabled={false}
                    size="small"
                    variant="outlined"
                    onClick={handleClickOpen}
            >see full review</Button>
            <SimpleDialog
                sx={{height: 250, width: 200}}
                name={business_person.name}
                review={review}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}