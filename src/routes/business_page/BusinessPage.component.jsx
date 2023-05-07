import {useLocation} from 'react-router-dom'
import data from "../../databases/BusinessAllData.json"
import {
    Avatar,
    Collapse, Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Rating,
    Stack
} from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useState} from "react";
import ReactCardSlider from "react-card-slider-component";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const sliderClick =(slider)=>
{
    return (()=>
    {
        alert(slider); // Put here something useful
    })
}

// TODO:
//  1. changing slides to be responsive.
//  2. create json file that contains the pictures and descriptions of each business.
const slides = [
    {
        image: "https://picsum.photos/200/300",
        title: "This is a title",
        description: "This is a description",
        clickEvent: sliderClick(1)
    },
    {
        image: "https://picsum.photos/600/500",
        title: "This is a second title",
        description: "This is a second description",
        clickEvent: sliderClick(2)
    },
    {
        image: "https://picsum.photos/700/600",
        title: "This is a third title",
        description: "This is a third description",
        clickEvent: sliderClick(3)
    },
    {
        image: "https://picsum.photos/500/400",
        title: "This is a fourth title",
        description: "This is a fourth description",
        clickEvent: sliderClick(4)
    },
    {
        image: "https://picsum.photos/200/300",
        title: "This is a fifth title",
        description: "This is a fifth description",
        clickEvent: sliderClick(5)
    },
    {
        image: "https://picsum.photos/800/700",
        title: "This is a sixth title",
        description: "This is a sixth description",
        clickEvent: sliderClick(6)
    },
    {
        image: "https://picsum.photos/800/900",
        title: "This is a seventh title",
        description: "This is a seventh description",
        clickEvent: sliderClick(7)
    }
];




/**
 * In charge of showing and opening the TimeTable
 * @returns {JSX.Element}
 * @constructor
 */
function TimeTable()
{
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return(
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'primary.light', padding: 0}}
                component="nav"
                aria-labelledby="nested-list-subheader">
                <ListItemButton onClick={handleClick} sx={{padding: 0}}>
                    <AccessTimeIcon />
                    <ListItemText sx={{pl:1, pr: 1}}>
                        <Typography variant="h7">
                            Time Table Items
                        </Typography>
                    </ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography variant="body1">
                                    Today
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography variant="body1">
                                    Tomorrow
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography variant="body1">
                                    Yesterday
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography variant="body1">
                                    Next Year
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}

/**
 * Shows all the relevant information about that person
 * @param data_on_person - got the data from "../../databases/BusinessAllData.json"
 * @returns {JSX.Element} - mainly a javascript and html
 * @constructor
 */
function ShowPerson(data_on_person)
{
    const [value, setValue] = useState(2);

    return(
        <div>
            <Box sx={{ paddingRight: '1rem', paddingLeft: '1rem',paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'primary.light', position: 'relative'}}>
                <Grid container spacing={1}>
                    <Grid item xs={8.5} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4"> {data_on_person.name} </Typography>
                        <Typography variant="h6">· {data_on_person.title}</Typography>
                        <p></p><p></p><p></p><p></p><p></p><p></p>
                        <Typography variant="h7">
                           <LocationOnIcon/>Shamai street 34, Jerusalem
                        </Typography>
                        {TimeTable()}
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'right' }}>
                            <Avatar
                                backgroundColor='background.paper'
                                elevation={3}
                                alt={`business ${data_on_person.name}`}
                                src={`https://robohash.org/${data_on_person.id}?set=set2&size=180x180`}
                                sx={{ width: 120, height: 120, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)',
                                    bgcolor: 'white'}}/>

                    </Grid>
                </Grid>
                <Box sx={{position: 'absolute', bottom: -40, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <LocalPhoneRoundedIcon />
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">Contact</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <NearMeOutlinedIcon sx={{
                            transform: "rotate(-90deg)"}}/>
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">Navigate</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <PeopleOutlineOutlinedIcon/>
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">Socials</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <ShareOutlinedIcon/>
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">Share</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                            <MailOutlineTwoToneIcon/>
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">Message</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{p:5}}></Box>
            <Typography variant="h5">
            Friends that used this business
            </Typography>
            <p></p>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <LastActivitiesFriendsDialog props={1}/>
                <LastActivitiesFriendsDialog props={2}/>
                <LastActivitiesFriendsDialog props={3}/>
                <LastActivitiesFriendsDialog props={4}/>
                <LastActivitiesFriendsDialog props={5}/>
            </Stack>


            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h3">
                    Rating: {data_on_person.rating}
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Stack>
            <div style={{ marginTop: "5em", marginBottom: "5em" }}>
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
        <div style={{paddingTop: "3.5rem"}}>
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