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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import peopleProfile from "../../databases/PeopleProfile.json"


// Here we can add more ways to contact, need to check it with the business way of contacting.

const contact_info = ['WhatsApp', 'Official Website', 'Email'];
const contact_icon = {'WhatsApp':<WhatsAppIcon/>,
    'Official Website':<LanguageIcon/>,
    'Email':<AlternateEmailIcon/>};
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
                <Typography variant="h4">Contacts</Typography>
            </DialogTitle>
            <List sx={{ pt: 0 }}>
                {contact_info.map((info) => (
                    <ListItem disableGutters>
                        <ListItemButton onClick={() => handleListItemClick(info)} key={info}>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    bgcolor: "#ede7f6",
                                    color: "primary.dark",
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
            <Avatar onClick={handleClickOpen} sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                <LocalPhoneRoundedIcon/>
            </Avatar>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}