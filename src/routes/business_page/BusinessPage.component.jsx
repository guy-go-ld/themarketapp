import {useLocation} from 'react-router-dom'
import data from "../../databases/ListData.json"
import {Avatar, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack} from "@mui/material";
import DialogBoxContact from "../../Components/dialog-box-contact/dialog_box_contact";
import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useState} from "react";

function ShowPerson(data_on_person)
{
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div>
            <h1>{data_on_person.name}</h1>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Avatar alt={`business ${data_on_person.name}`}
                        src={`https://robohash.org/${data_on_person.id}?set=set2&size=180x180`}
                        sx={{ width: 90, height: 90 }}/>
            </Stack>
            <h3>{data_on_person.title}</h3>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <DialogBoxContact props = {0}></DialogBoxContact>
                <DialogBoxContact props = {1}></DialogBoxContact>
                <DialogBoxContact props = {2}></DialogBoxContact>
            </Stack>
            <p></p>
            Friends that used this business
            <p></p>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <LastActivitiesFriendsDialog props={1}/>
                <LastActivitiesFriendsDialog props={2}/>
                <LastActivitiesFriendsDialog props={3}/>
                <LastActivitiesFriendsDialog props={4}/>
                <LastActivitiesFriendsDialog props={5}/>
            </Stack>

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>

                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Time Table Items
                        </ListSubheader>
                    }
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary="TimeTable" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Today" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Tomorrow" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Yesterday" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Next year" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Stack>
            HERE
        </div>
    );
}
export default function BusinessPageComponent()
{
    const location = useLocation()
    const check_null = location.state === null;
    let {from} = (check_null === true) ? 0 : location.state;

    const data_on_person = data.filter((business) => business.id === from)[0]; // TODO better this stuff

    return (
        <div>
            {(check_null === true) ?
                (<div><h2> Error - business page doesn't exists</h2></div>)
            :
                (<div>{ShowPerson(data_on_person)}</div>)
            }

        </div>
    );
}
// class BusinessPageComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1 >My Business Page</h1>
//             </div>
//         );
//     }
// }
//
// export default BusinessPageComponent;