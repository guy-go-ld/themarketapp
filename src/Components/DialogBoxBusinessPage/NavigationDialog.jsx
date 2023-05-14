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
import {Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// Here we can add more ways to contact, need to check it with the business way of contacting.

const contact_info = ['Waze', 'Google Maps'];
const contact_icon = {'Waze':<FontAwesomeIcon icon="fa-brands fa-waze" style={{color: "#775cdf", zIndex: 400}} />,
    'Google Maps':<LocationOnIcon/>};
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
                <Typography variant="h4">Navigate With:</Typography>
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

export default function NavigationDialogBox() {
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
                <NearMeOutlinedIcon sx={{
                    transform: "rotate(-90deg)"}}/>
            </Avatar>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}