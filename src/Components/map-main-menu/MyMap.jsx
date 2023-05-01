import React, {Component, useEffect, useState} from 'react'
import "leaflet/dist/leaflet.css"
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "./MyMap.css";
import { MarkerLayer } from "react-leaflet-marker";
import L from "leaflet";
import MapLocations from "../../databases/MapLocations.json";
import {Box} from "@mui/material";

const IconPerson = new L.Icon({
    iconUrl: require("../../Icons/LocationPin.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top/bottom],
    popupAnchor: [0, -46]

})


function componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
}
export default function MyMap()
{
    const [map, setMap] = useState(null);
    const [height, setHeight] = useState(window.innerWidth >= 600 ? window.innerHeight : 100)
    window.addEventListener("resize", updateDimensions)

    function updateDimensions()
    {
        setHeight((window.innerWidth >= 600 ? window.innerHeight : 100))
        if (map!=null){
            console.log(typeof(map))
            map.invalidateSize(true);
        }


    }
        return(
            // <Box sx={{ height: 100, width: '100%' }}>
            // <Box sx={{ height: '75%' }}>
            <div>
                <MapContainer center={[31.777587, 35.215094]} zoom={15} scrollWheelZoom={true} style={{ height: height, width: '80%', border: 'black solid 4px', margin: 'auto', resize: 'vertical'}} whenCreated={setMap}>
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
            </div>
            // </Box>
        )


}


// class MyMap extends Component
// {
//     constructor(props) {
//         super(props);
//         this.height = window.innerWidth >= 600 ? window.innerHeight : 100;
//         // this.map = L.map('map', {center:[31.777587, 35.215094],
//         //     zoom:15, scrollWheelZoom:true})
//         // L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
//         //     { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(this.map);
//
//     }
//     updateDimensions() {
//         this.height = window.innerWidth >= 600 ? window.innerHeight : 100
//         console.log(this.height);
//         let map = L.map('my-map'); // my-map is the ID of your DOM map container
//         // map.invalidateSize();
//     }
//
//     componentDidMount() {
//         window.addEventListener("resize", this.updateDimensions)
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener("resize", this.updateDimensions)
//     }
//     render() {
//
//
//
//         return(
//             // <Box sx={{ height: 100, width: '100%' }}>
//             // <Box sx={{ height: '75%' }}>
//             <div>
//             <MapContainer id = 'my-map' center={[31.777587, 35.215094]} zoom={15} scrollWheelZoom={true} style={{ height: this.height, width: '80%', border: 'black solid 4px', margin: 'auto', resize: 'vertical'}}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"/>
//                 <MarkerLayer>
//                     {MapLocations.map(mapDat =>
//                         <Marker
//                             position={[mapDat.Coord.latitude, mapDat.Coord.longitude]}
//                             size={[80, 20]}
//                             icon={ IconPerson }>
//
//                             <Popup id="popup">
//                                 <h3 id="businessName">{mapDat.BusinessName}</h3>
//                                 <p id="businessAddress">{mapDat.Address}</p>
//                                 <p id="description">{mapDat.Description}</p>
//                                 <p id="numOfPeople">{mapDat.NumOfPeople + ' people you connect with visited here recently'}</p>
//                                 <a id="URLlink" href={mapDat.URL}>business page</a>
//                                 {/*<p id="popup">Hi! I am pop up! <br/> What are you???</p>*/}
//                                 {/*<a href="https://react-leaflet.js.org/">react-leaflet</a>*/}
//                             </Popup>
//                         </Marker>
//                     )}
//                 </MarkerLayer>
//             </MapContainer>
//             </div>
//             // </Box>
//         )
//     }
//
// }
//
//
// export default MyMap
//
