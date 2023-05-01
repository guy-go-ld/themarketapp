import {useLocation} from 'react-router-dom'
import data from "../../databases/BusinessAllData.json"
import {
    Avatar,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Rating,
    Stack
} from "@mui/material";
import DialogBoxContact from "../../Components/dialog-box-contact/dialog_box_contact";
import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useState} from "react";
import ReactCardSlider from "react-card-slider-component";


const slides = [
    {
        image: "https://picsum.photos/200/300",
        title: "This is a title",
        description: "This is a description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/600/500",
        title: "This is a second title",
        description: "This is a second description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/700/600",
        title: "This is a third title",
        description: "This is a third description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/500/400",
        title: "This is a fourth title",
        description: "This is a fourth description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/200/300",
        title: "This is a fifth title",
        description: "This is a fifth description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/800/700",
        title: "This is a sixth title",
        description: "This is a sixth description"
        // clickEvent: sliderClick
    },
    {
        image: "https://picsum.photos/800/900",
        title: "This is a seventh title",
        description: "This is a seventh description"
        // clickEvent: sliderClick
    }
];
function ShowPerson(data_on_person)
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(2);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div>
            <h1>{data_on_person.name}</h1>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Avatar alt={`business ${data_on_person.name}`}
                        src={`https://robohash.org/${data_on_person.id}?set=set2&size=180x180`}
                        sx={{ width: 120, height: 120 }}/>
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
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <h1>Rating: {data_on_person.rating}</h1>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Stack>
            <div style={{ marginTop: "5em" }}>
                <ReactCardSlider slides={slides} />
            </div>

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