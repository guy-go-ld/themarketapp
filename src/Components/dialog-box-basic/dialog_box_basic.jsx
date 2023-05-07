import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import {Typography} from "@mui/material";
import { ReactComponent as EmailSvg } from '../../Icons/email-svgrepo-com.svg';
import { ReactComponent as ChromeSvg } from '../../Icons/chrome-svgrepo-com.svg';
import { ReactComponent as WhatsAppSvg } from '../../Icons/whatsapp-svgrepo-com.svg';

// Here we can add more ways to contact, need to check it with the business way of contacting.

const contact_info = ['WhatsApp', 'Official Website', 'Email'];
const contact_icon = {'WhatsApp':<WhatsAppSvg/>,
    'Official Website':<ChromeSvg/>,
    'Email':<EmailSvg/>};
function SimpleDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">Hi list of emails:</Typography>
                </DialogTitle>
            <List sx={{ pt: 0 }}>
                {contact_info.map((info) => (
                    <ListItem disableGutters>
                        <ListItemButton onClick={() => handleListItemClick(info)} key={info}>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    bgcolor: blue[100],
                                    color: blue[600],
                                }}>
                                    {contact_icon[info]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                            <Typography variant="h5">{info}</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function LastActivitiesFriendsDialog(id_param) {
    const [open, setOpen] = React.useState(false);
    // const id_account = id_param;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Avatar onClick={handleClickOpen}>
                {/*<Typography varianr="h3">*/}
                    H
                {/*</Typography>*/}
            </Avatar>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}