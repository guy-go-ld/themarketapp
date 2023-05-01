import React, {Component, useEffect, useState} from 'react'
import "leaflet/dist/leaflet.css"
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "./MyMap.css";
import { MarkerLayer } from "react-leaflet-marker";
import L from "leaflet";
import MapLocations from "../../databases/MapLocations.json";
import sizing from "@mui/system";
import {Box} from "@mui/material";
import Container from '@mui/material/Container';


const IconPerson = new L.Icon({
    iconUrl: require("../../Icons/LocationPin.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top/bottom],
    popupAnchor: [0, -46]

})




class MyMap extends Component
{
    constructor(props) {
        super(props);
        // this.state = [[51.505, -0.09], [51.505, -0.09]];
        this.height = window.innerWidth >= 600 ? window.innerHeight : 100;

        // this.const [height, setHeight] = useState('initial')
    }
    // hello(){alert("HELLO");}
    // updateDimensions() {
    //     const height = window.innerWidth >= 600 ? window.innerHeight : 100
    //     console.log(this.state.height)
    //     this.setState({ height: height })
    //     (window.innerWidth >= 600 ? window.innerHeight : 100)
    // }
    //
    // componentWillMount() {
    //     this.updateDimensions()
    // }
    //
    // componentDidMount() {
    //     window.addEventListener("resize", this.updateDimensions)
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions)
    // }
//     handleResize = () => {
//     const bounds = this.mapRef.current.leafletElement.getBounds();
//     this.setState({ bounds });
// };
    render() {



        return(
            // <Box sx={{ height: 100, width: '100%' }}>
            // <Box sx={{ height: '75%' }}>
            <Container maxWidth="xl">
            <MapContainer center={[31.777587, 35.215094]} zoom={15} scrollWheelZoom={true} style={{ height: '50vh', width: '80%', border: 'black solid 4px', radius:'2', margin: 'auto', resize: 'vertical'}}>
                {/*<MapContainer center={[31.777587, 35.215094]} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '80%', border: 'black solid 4px', borderRadius:'2', margin: 'auto', resize: 'vertical'}}>*/}

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"

                />
                <MarkerLayer>
                    {MapLocations.map(mapDat =>
                        <Marker
                            position={[mapDat.Coord.latitude, mapDat.Coord.longitude]}
                            size={[80, 20]}
                            icon={ IconPerson }>

                            <Popup id="popup">
                                <h3 id="businessName">{mapDat.BusinessName}</h3>
                                <p id="businessAddress">{mapDat.Address}</p>
                                <p id="description">{mapDat.Description}</p>
                                <p id="numOfPeople">{mapDat.NumOfPeople + ' people you connect with visited here recently'}</p>
                                <a id="URLlink" href={mapDat.URL}>business page</a>
                                {/*<p id="popup">Hi! I am pop up! <br/> What are you???</p>*/}
                                {/*<a href="https://react-leaflet.js.org/">react-leaflet</a>*/}
                            </Popup>
                        </Marker>
                    )}

                </MarkerLayer>
            </MapContainer>
            </Container>
            // </Box>
            // </Box>
        )
    }

}


export default MyMap

