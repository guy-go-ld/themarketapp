import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Rating, Stack} from "@mui/material";



export interface SimpleDialogProps {
    open: boolean;
    selectedValue: Number;
    onClose: (value: Number) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: Number) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Rate this business</DialogTitle>
            <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                <Rating
                    name="simple-controlled"
                    value={selectedValue}
                    onChange={(event, newValue) => {
                        handleListItemClick(newValue);
                    }}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#C3ED5B',
                        },
                        '& .MuiRating-iconHover': {
                            color: '#C3ED5B',
                        }}}
                    precision={0.5}
                />
            </Stack>
        </Dialog>
    );
}

export default function MyRatingComponent({personIdAndBusinessRating}) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(personIdAndBusinessRating.rating);
    const rating = personIdAndBusinessRating.read_only_rating;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>

            <Rating
                name="simple-controlled"
                value={rating}
                onClick={handleClickOpen}
                sx={{
                    '& .MuiRating-iconFilled': {
                        color: '#C3ED5B',
                    },
                    '& .MuiRating-iconHover': {
                        color: '#C3ED5B',
                    }}}
                precision={0.5}
            />

            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />

        </div>
    );
}