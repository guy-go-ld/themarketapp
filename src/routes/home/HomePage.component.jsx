import {Component, useEffect, useState} from "react";
import './HomePage.styles.css';
import MyMap from "../../Components/map-main-menu/MyMap";
import {Link} from "react-router-dom";
import {useMap} from "react-leaflet";
import {Avatar, Stack} from "@mui/material";

import {deepOrange, deepPurple} from "@mui/material/colors";
import LastActivitiesFriendsDialog from "../../Components/dialog-box-basic/dialog_box_basic";
import BusinessNameCard from "../../Components/business-name-card/business-name-card.component";
import Mapi from '../../Components/mapi/Mapi';
// TODO how to implement hooks in a class?
export const mapHook = (Component) =>
{
    return (props) => {
        const map = useMap()
        useEffect(() => {
            map.flyTo(props.position)
        }, [props.position])

        return null
    }
}

export function Hi()
{
    const [size, setSize] = useState( '40vh')

    const updateSize = () =>
    {
        if (window.innerWidth >= 600)
        {
            setSize('80vh');
        } else
        {
            setSize('40vh');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div style={{ height: size }}>
            <Mapi />
        </div>
    );
}

class HomePageComponent extends Component{



    render(){
        const position = [31.777587, 35.215094]; //[this.state.location.lat, this.state.location.lng];

        return(
            <div className="All Home Page">
              <h1 >My Bazzar App</h1>
                <div className="Last-Activities-Friends">

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <LastActivitiesFriendsDialog props={1}/>
                        <LastActivitiesFriendsDialog props={2}/>
                        <LastActivitiesFriendsDialog props={3}/>

                    {/*    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>*/}
                    {/*<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>*/}
                </Stack>
                </div>
                <Hi/>
                {/*<div style={{ height: '40vh' }}>*/}
                {/*    <Mapi />*/}
                {/*</div>*/}
                <button onClick={mapHook}>JumpTo</button>
                <BusinessNameCard business={{"id": 1, "name": "Ofra's lak-gel", "title": "lak gel"}}/>
            </div>
        );
    }
}

export default HomePageComponent;
