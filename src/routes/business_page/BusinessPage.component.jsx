import {useLocation} from 'react-router-dom'
import data from "../../databases/BusinessAllData.json"
import peopleProfile from "../../databases/Profiles.json"
import {
    Avatar, Grid, Stack
} from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import DialogContactBox from "../../Components/DialogBoxBusinessPage/ContactDialog";
import ReactCardSlider from "react-card-slider-component";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Divider from "@mui/material/Divider";
import MyRatingComponent from "../../Components/MyRating/my-rating.component";
import * as React from "react";
import BusinessAvatar from "../../Components/BusinessAvatar/business-avatar.component";
import TimeTable from "../../Components/TimeTable/time-table.component";
import ContactDialog from "../../Components/dialog-box-contact/dialog_box_contact";
import NavigationDialogBox from "../../Components/DialogBoxBusinessPage/NavigationDialog";
import SocialDialogBox from "../../Components/DialogBoxBusinessPage/SocialDialog";
import ShareDialogBox from "../../Components/DialogBoxBusinessPage/ShareDialog";
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
 * Shows all the relevant information about that person
 * @param data_on_person - got the data from "../../databases/BusinessAllData.json"
 * @returns {JSX.Element} - mainly a javascript and html
 * @constructor
 */
function ShowPerson(data_on_person)
{

    return(
        <div>
            <Box sx={{ paddingRight: '1rem', paddingLeft: '1rem',paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'primary.light', position: 'relative', borderBottom: 4, borderBottomColor: "secondary.main"}}>
                <Grid container spacing={1}>
                    <Grid item xs={8.5} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4"> {data_on_person.name} </Typography>
                        <Typography variant="h5">· {data_on_person.title}</Typography>
                        <p></p><p></p><p></p><p></p><p></p><p></p>
                        <Stack direction="row" justifyContent="start" alignItems="center" spacing={2} marginBottom="1rem">
                            <Typography variant="h5">
                                Rating: {data_on_person.rating}
                            </Typography>
                            <MyRatingComponent personIdAndBusinessRating={{"read_only_rating":data_on_person.rating, "rating":data_on_person.rating}}/>
                        </Stack>
                        <Typography justifyContent="start" variant="h5">
                           {/* TODO: need to add business address from json*/}
                           <LocationOnIcon />
                            {data_on_person.address}
                            {/*Shamai street 34, Jerusalem*/}
                        </Typography>
                        <TimeTable business={data_on_person}></TimeTable>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'right' }}>
                        <BusinessAvatar business={{"name":data_on_person.name,"id":data_on_person.id,"profile_img":data_on_person.profile_img,"size":false}} />
                    </Grid>
                </Grid>
                <Box sx={{position: 'absolute', bottom: -40, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        {/*<LocalPhoneRoundedIcon />*/}
                            <DialogContactBox/>
                        </Avatar>
                        <Typography variant="body1" color="text.main">Contact</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        {/*<NearMeOutlinedIcon sx={{*/}
                        {/*    transform: "rotate(-90deg)"}}/>*/}
                            <NavigationDialogBox/>
                        </Avatar>
                        <Typography variant="body1" color="text.main">Navigate</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <SocialDialogBox/>
                        </Avatar>
                        <Typography variant="body1" color="text.main">Socials</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                        <ShareDialogBox/>
                        </Avatar>
                        <Typography variant="body1" color="text.main">Share</Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                            <MailOutlineTwoToneIcon/>
                        </Avatar>
                        <Typography variant="body1" color="text.main">Message</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{p:5}}></Box>
            <Typography variant="h5" sx={{justifySelf: "start", display: "flex", paddingLeft: "1.5rem"}}>
            Friends that used this business
            </Typography>
            <Divider/>
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={2} p="1rem" overflow="scroll">
                {peopleProfile.map(prof =>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{color: "primary.main", width: 50, height: 50, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                            {/*<PeopleOutlineOutlinedIcon/>*/}

                            <LastActivitiesFriendsDialog props={prof.profileImg}/>


                        </Avatar>
                        <Typography variant="h6" color="text.secondary">{prof.name}</Typography>
                    </Box>
                )}

                {/*<LastActivitiesFriendsDialog props={1}/>*/}
                {/*<LastActivitiesFriendsDialog props={2}/>*/}
                {/*<LastActivitiesFriendsDialog props={3}/>*/}
                {/*<LastActivitiesFriendsDialog props={4}/>*/}
                {/*<LastActivitiesFriendsDialog props={5}/>*/}
            </Stack>
            <Divider/>

            {/*<Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>*/}
            {/*    <Typography variant="h3">*/}
            {/*        Rating: {data_on_person.rating}*/}
            {/*    </Typography>*/}
            {/*    <Rating*/}
            {/*        name="simple-controlled"*/}
            {/*        value={value}*/}
            {/*        onChange={(event, newValue) => {*/}
            {/*            setValue(newValue);*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Stack>*/}
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