import React, { useRef, useEffect } from 'react';
import L from 'leaflet';


const IconPerson = new L.Icon({
    iconUrl: require("../../Icons/LocationPin.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top/bottom],
    popupAnchor: [0, -46]

})
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
            const marker1 = L.marker([31.777587, 35.215094], {size: [80,20],icon: IconPerson}).bindPopup('Whitehaven Beach, Whitsunday Island').addTo(map);
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

    return <div ref={mapContainer} style={{ height: '100%', width: '100%' ,border: 'black solid 4px'}} />;
};

export default Mapi;
