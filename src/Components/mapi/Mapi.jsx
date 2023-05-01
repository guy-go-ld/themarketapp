import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import MapLocations from "../../databases/MapLocations.json";
import "leaflet/dist/leaflet.css"
import "./Mapi.css";



const IconPerson = new L.Icon({
    iconUrl: require("../../Icons/LocationPin.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top/bottom],
    popupAnchor: [0, -46]

})


function popUpContent (mapDat) {
    return (
        "<div id='popup'> " +
        "<h3 id='businessName'>"+mapDat.BusinessName+"</h3>" +
        "<p id='businessAddress'>"+mapDat.Address+"</p>" +
        "<p id='description'>"+mapDat.Description+"</p>" +
        "<p id='numOfPeople'>"+mapDat.NumOfPeople+" people you connect with visited here recently</p>" +
        "<a id='URLlink' href={mapDat.URL}>business page</a>" +
        "</div>"
     )
}
const Mapi = () => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map(mapContainer.current).setView([31.777587, 35.215094], 13);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);
            MapLocations.map(mapDat=> L.marker([mapDat.Coord.latitude, mapDat.Coord.longitude], {size: [80,20],icon: IconPerson}).bindPopup(popUpContent(mapDat)).addTo(map));
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

    return <div ref={mapContainer} style={{ height: '100%', width: '90%' ,border: 'black solid 4px', margin:'auto'}} />;
};

export default Mapi;
