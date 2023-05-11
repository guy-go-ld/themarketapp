import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import {Button} from "@mui/material";

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
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{props.name}'s Review:</DialogTitle>
            <div>{props.review} </div>
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
                name={business_person.name}
                review={review}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}