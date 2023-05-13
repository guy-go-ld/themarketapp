import {Component} from "react";
import './HomePage.styles.css';
import {Typography} from "@mui/material";


import ResizableMap from '../../Components/updatable-map/ResizableMap'
import Divider from "@mui/material/Divider";
import HomePageCards from "../../Components/homePageCards/HomePageCard";



class HomePageComponent extends Component{



    render(){
        // const position = [31.777587, 35.215094]; //[this.state.location.lat, this.state.location.lng];

        return(
            <div className="All-Home-Page" style={{
                marginTop: "7rem",
                paddingLeft:"1rem",
                paddingRight:"1rem",
                paddingBottom:"7rem"
            }}>

                <br/>
                <Typography variant="h4" justifyItems="start" textAlign="left" marginBottom="1rem">My friends top visits</Typography>
                <Divider/>
                <br/>
                <HomePageCards/>
                <br/>
                <Divider />
                <br/>
                {/*<button>Show all visits</button>*/}
                {/*<div className="Last-Activities-Friends">*/}
                {/*    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>*/}
                {/*        <LastActivitiesFriendsDialog props={1}/>*/}
                {/*        <LastActivitiesFriendsDialog props={2}/>*/}
                {/*        <LastActivitiesFriendsDialog props={3}/>*/}

                {/*    /!*    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>*!/*/}
                {/*    /!*<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>*!/*/}
                {/*</Stack>*/}
                {/*</div>*/}
                <div className="map-container width-100"
                    // style={{paddingTop: "2rem", paddingBottom: "2rem"}}
                >
                    <ResizableMap/>
                </div>
                {/*<button onClick={mapHook}>JumpTo</button>*/}
                {/*<BusinessNameCard business={{"id": 1, "name": "Ofra's lak-gel", "title": "lak gel"}}/>*/}
            </div>
        );
    }
}

export default HomePageComponent;
