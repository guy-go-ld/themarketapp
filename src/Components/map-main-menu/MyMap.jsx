import React, {Component, useEffect} from 'react'
import "leaflet/dist/leaflet.css"
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "./MyMap.css";
import { MarkerLayer } from "react-leaflet-marker";
import L from "leaflet";
import MapLocations from "../../databases/MapLocations.json";

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
        this.state = [[51.505, -0.09], [51.505, -0.09]];
        this.mapRef = React.createRef();
    }
    handleResize = () => {
    const bounds = this.mapRef.current.leafletElement.getBounds();
    this.setState({ bounds });
};
    render() {



        return(
            <MapContainer center={[31.777587, 35.215094]} zoom={15} scrollWheelZoom={true} style={{ height: '50vh', width: '80%', border: 'black solid 4px', margin: 'auto'}} bounds={[[51.505, -0.09], [51.505, -0.09]]} boundsOptions={{ padding: [50, 50] }} resize="vertical">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
        )
    }

}


export default MyMap

