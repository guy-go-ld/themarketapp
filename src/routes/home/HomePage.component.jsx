import {Component} from "react";
import './HomePage.styles.css';
import {Stack, Typography} from "@mui/material";

import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import BusinessNameCard from "../../Components/business-name-card/business-name-card.component";
import ResizableMap from '../../Components/updatable-map/ResizableMap'
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
// TODO how to implement hooks in a class?



class HomePageComponent extends Component{



    render(){
        // const position = [31.777587, 35.215094]; //[this.state.location.lat, this.state.location.lng];

        return(
            <div className="All-Home-Page" style={{
                marginTop: "7rem",
                paddingLeft:"2rem",
                paddingRight:"2rem",
                paddingBottom:"7rem"
            }}>
                <header>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
                        <ApartmentRoundedIcon
                            sx={{
                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '5rem',
                                    lg: '6rem'
                                }
                        }}/>
                        <Typography variant="h1">CityCircle</Typography>
                    </Stack>
                </header>
                <div className="Last-Activities-Friends">
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <LastActivitiesFriendsDialog props={1}/>
                        <LastActivitiesFriendsDialog props={2}/>
                        <LastActivitiesFriendsDialog props={3}/>

                    {/*    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>*/}
                    {/*<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>*/}
                </Stack>
                </div>
                <div style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                    <ResizableMap/>
                </div>
                {/*<button onClick={mapHook}>JumpTo</button>*/}
                <BusinessNameCard business={{"id": 1, "name": "Ofra's lak-gel", "title": "lak gel"}}/>
            </div>
        );
    }
}

export default HomePageComponent;
