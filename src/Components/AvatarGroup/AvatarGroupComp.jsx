import * as React from 'react';
// import data_on_person from "../../databases/BusinessAllData.json";
import List from "@mui/material/List";
import data from "../../databases/BusinessAllData.json";
import './AvatarGroupComp.styles.css';
import CommunityCard from '../CommunityCard/community-card.component';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import BusinessAvatar from "../BusinessAvatar/business-avatar.component";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {Button, Rating, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import ReviewDialogComponent from "../ReviewDialog/review-dialog.component";
import QuestionDialogComponent from "../ReviewDialog/QuestionDialogComponent";
import GoToDialogComponent from "../ReviewDialog/GoToDialogComponent";
import Divider from "@mui/material/Divider";
import AvatarGroup from "@mui/material/AvatarGroup";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function AlignItemsList() {
    return (

        <List sx={{ width: '90%', maxWidth: 550, bgcolor: 'background.paper', paddingBottom: "4rem"}}>
            {/*TODO: if we want to use json this is the code:*/}
            {/*{data.map(businesses =>*/}
            {/*        <CommunityCard business={businesses}></CommunityCard>)*/}
            {/*}*/}

        {/*    TODO: the code for milestone 1 mockup:    */}
            <div style={{margin: "2px"}}>
                <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                    <ListItemAvatar>
                        {/*{GroupAvatars(business)}*/}
                        <AvatarGroup>
                        <BusinessAvatar business={{"name":"Naama Nahary Nails","id":2,"profile_img":"2","size":true}} />
                        <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/1.jpg">T</Avatar>
                        </AvatarGroup>
                    </ListItemAvatar>
                    <ListItemText sx={{paddingLeft: 2}}
                        primary={
                            <Typography
                            variant="h5">
                        Tal reviewd 'Naama Nahary Nails'
                            </Typography>}
                        // secondary={
                        //     <React.Fragment>
                        //         <Typography
                        //             sx={{ display: 'inline' }}
                        //             component="span"
                        //             variant="h6"
                        //             color="text.primary"
                        //         >
                        //             Naama Nahary Nails
                        //         </Typography>
                        //         {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                        //     </React.Fragment>
                        // }
                    />
                    <FormatQuoteIcon sx={{fontSize:100, alignItems: "center"}}/>
                </ListItem>
                <Rating
                    name="simple-controlled"
                    value={4.6}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#C3ED5B',
                        },
                        '& .MuiRating-iconHover': {
                            color: '#C3ED5B',
                        }}}/>
                <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                    <Button color="primary"
                            disabled={false}
                            size="small"
                            variant="outlined">
                        <Link to={'../BusinessPageComponent'} state={{ from: 2}} className="link-container" >visit business</Link>
                    </Button>
                    <ReviewDialogComponent business_person={{"reviews": ["She is the BEST!"], "id": 0, "name":"Tal" }} />
                </Stack>
                <Divider variant="inset" component="li" />
            </div>

            <div style={{margin: "2px"}}>
                <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                    <ListItemAvatar>
                        {/*{GroupAvatars(business)}*/}
                        <AvatarGroup>
                            <BusinessAvatar business={{"name":"Masperafi","id":4,"profile_img":"4","size":true}} />
                            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/1.jpg">G</Avatar>
                        </AvatarGroup>
                    </ListItemAvatar>
                    <ListItemText sx={{paddingLeft: 2}}
                        primary={
                        <Typography
                            variant="h5">

                        Guy asked “Misparafi” a question
                        </Typography>}

                        // secondary={
                        //     <React.Fragment>
                        // //         <Typography
                        // //             sx={{ display: 'inline' }}
                        // //             component="span"
                        // //             variant="h6"
                        // //             color="text.primary"
                        // //         >
                        // //             Yahav Nails Jerusalem
                        //         </Typography>
                        //         {" — I'll be in your neighborhood doing errands this…"}
                        //     </React.Fragment>
                        // }

                    />

                <QuestionMarkIcon sx={{fontSize: 100, alignItems: "center"}}/>
                </ListItem>
                <Rating
                    name="simple-controlled"
                    value={4.9}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#C3ED5B',
                        },
                        '& .MuiRating-iconHover': {
                            color: '#C3ED5B',
                        }}}/>


                <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                    <Button color="primary"
                            disabled={false}
                            size="small"
                            variant="outlined">
                        <Link to={'../BusinessPageComponent'} state={{ from: 4}} className="link-container" >visit business</Link>
                    </Button>
                    <QuestionDialogComponent business_person={{"question": ["What is your favorite haircut?"], "id": 0, "name":"Guy" }} />

                </Stack>
                <Divider variant="inset" component="li" />
            </div>

            <div style={{margin: "2px"}}>
                <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                    <ListItemAvatar>
                        {/*{GroupAvatars(business)}*/}
                        <AvatarGroup>
                            <BusinessAvatar business={{"name":"Handylock","id":5,"profile_img":"5","size":true}} />
                            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/1.jpg">H</Avatar>
                        </AvatarGroup>
                    </ListItemAvatar>
                    <ListItemText sx={{paddingLeft: 2}}
                                  primary={
                                      <Typography
                                          variant="h5">

                                          Noa marked “Handylock” as a GOTO
                                      </Typography>}

                                  // secondary={
                                  //     <React.Fragment>
                                  //         <Typography
                                  //             sx={{ display: 'inline' }}
                                  //             component="span"
                                  //             variant="h6"
                                  //             color="text.primary"
                                  //         >
                                  //             Yahav Nails Jerusalem
                                  //         </Typography>
                                  //         {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                                  //     </React.Fragment>
                                  // }

                    />

                    <StarRoundedIcon sx={{fontSize: 100, alignItems: "center"}}/>

                </ListItem>
                <Rating
                    name="simple-controlled"
                    value={4.9}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#C3ED5B',
                        },
                        '& .MuiRating-iconHover': {
                            color: '#C3ED5B',
                        }}}/>


                <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                    <Button color="primary"
                            disabled={false}
                            size="small"
                            variant="outlined">
                        <Link to={'../BusinessPageComponent'} state={{ from: 5}} className="link-container" >visit business</Link>
                    </Button>
                    <GoToDialogComponent business_person={{"id": 0, "name":"Noa" }} />
                </Stack>
                <Divider variant="inset" component="li" />
            </div>

            <div style={{margin: "2px"}}>
                <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                    <ListItemAvatar>
                        {/*{GroupAvatars(business)}*/}
                        <AvatarGroup>
                            <BusinessAvatar business={{"name":"Yahav Nails Jerusalem","id":3,"profile_img":"3","size":true}} />
                            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/1.jpg">H</Avatar>
                        </AvatarGroup>
                    </ListItemAvatar>
                    <ListItemText sx={{paddingLeft: 2}}
                                  primary={
                                      <Typography
                                          variant="h5">

                                          Hila reviewd 'Yahav Nails Jerusalem'
                                      </Typography>}

                        // secondary={
                        //     <React.Fragment>
                        //         <Typography
                        //             sx={{ display: 'inline' }}
                        //             component="span"
                        //             variant="h6"
                        //             color="text.primary"
                        //         >
                        //             Yahav Nails Jerusalem
                        //         </Typography>
                        //         {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                        //     </React.Fragment>
                        // }

                    />

                    <FormatQuoteIcon sx={{fontSize: 100, alignItems: "center"}}/>

                </ListItem>
                <Rating
                    name="simple-controlled"
                    value={4.3}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#C3ED5B',
                        },
                        '& .MuiRating-iconHover': {
                            color: '#C3ED5B',
                        }}}/>


                <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                    <Button color="primary"
                            disabled={false}
                            size="small"
                            variant="outlined">
                        <Link to={'../BusinessPageComponent'} state={{ from: 3}} className="link-container" >visit business</Link>
                    </Button>
                    <ReviewDialogComponent business_person={{"reviews": ["AMAZING nails, Yahav is one of the best!"], "id": 0, "name":"Hila" }} />
                </Stack>
                <Divider variant="inset" component="li" />
            </div>

        </List>
    );
}