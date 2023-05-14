import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import MapLocations from "../../databases/MapLocations.json";
import "leaflet/dist/leaflet.css"
import "./Mapi.css";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import {Typography} from "@mui/material";


const IconLocation = new L.Icon({
    iconUrl: require("../../Icons/LocationPin.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top/bottom],
    popupAnchor: [0, -46]

})

// const LocationIcon = new L.divIcon({
//     createIcon(
//         <LocationOnIcon/>
//     )
// })

// TODO: this function does not recognize the Typography tag, why??
function popUpContent (mapDat) {
    return (
        "<div id='popup'> " +
        "<Typography variant='h3' id='businessName'>"+mapDat.BusinessName+"</Typography>" +
            "<br />"+
        "<Typography variant='h1' id='businessAddress'>"+mapDat.Address+"</Typography>" +
        "<br />"+
        "<Typography variant='body1' id='description'>"+mapDat.Description+"</Typography>" +
        "<br />"+
        "<Typography variant='body1' id='numOfPeople'>"+mapDat.NumOfPeople+" people you connect with visited here recently</Typography>" +
        "<br />"+
        "<a id='URLlink' href={mapDat.URL}>business page</a>" +
        "</div>"
     )
}
const Mapi = () => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map(mapContainer.current).setView([31.777587, 35.215094], 14);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);
            MapLocations.map(mapDat=> L.marker([mapDat.Coord.latitude, mapDat.Coord.longitude], {size: [80,20],icon: IconLocation}).bindPopup(popUpContent(mapDat), { maxWidthXs: 100, maxWidthSm:200, maxWidthMd: 300, maxWidthLg:400, maxWidthXl: 500, maxWidth: 300}).addTo(map));
            // const marker1 = L.marker([31.777587, 35.215094], {size: [80,20],icon: IconPerson}).bindPopup(popUpContent()).addTo(map);
            // popUpContent();
            mapRef.current = map;
        }

        // Add markers, polygons, or other Leaflet components as needed
    }, []);

    const updateSize = () => {
        const map = mapRef.current;
        if (map) {
            map.invalidateSize(true);
            // console.log("updated size "+ new_height);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return <div ref={mapContainer} style={{ height: '100%', width: '90%' ,border: 'whitesmoke solid 8px', margin:'auto', marginBottom: '8px'}} />;
};

export default Mapi;
