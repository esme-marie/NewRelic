import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from './VenueMarkers';
import data from '../../assets/data.json';
import 'leaflet/dist/leaflet.css';
import "../../App.css";

class MyMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const currentLocation = { lat: 18.979026, lng: 17.156246 };
        const zoom = 1.5;
        return (
            <div className="col">
                <a className="btn btn-dark btn-md text-light" href="/">BACK</a>
                <MapContainer center={currentLocation} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Markers venues={data.venues} />
                </MapContainer>
                
            </div>
        )
    }
}

export default MyMap;