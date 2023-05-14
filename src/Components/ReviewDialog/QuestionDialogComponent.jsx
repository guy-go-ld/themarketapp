import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export interface SimpleDialogProps {
    open: boolean;
    name: string;
    question: string;
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
                    {props.name}'s Question:
                </Typography>
            </DialogTitle>
            <Typography variant="h5" style={{padding: 10, paddingBottom:10 }}>{props.question} </Typography>
            <QuestionMarkIcon sx={{fontSize: 100, alignSelf: "center", color: "primary.main"}}/>

        </Dialog>
    );
}

export default function QuestionDialogComponent({business_person}) {
    const [open, setOpen] = React.useState(false);
    const question = business_person.question[business_person.id];

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
            >see question</Button>
            <SimpleDialog
                sx={{height: 250, width: 200}}
                name={business_person.name}
                question={question}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}