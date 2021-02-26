import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import data from '../assets/data.json';
import 'leaflet/dist/leaflet.css';
import "../App.css";


function GetIcon(animal) {
    return L.icon({
        iconUrl: "./animals/"+animal+".png", 
        iconSize: [35, 35]
    });
}
        
const MyMap = ()=>{
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
            { data.venues.map((venue, index) => (                
                <Marker                     
                    key={index} 
                    position={venue.geometry} 
                    icon={GetIcon(venue.animal)}
                > 
                <Popup>
                    <form action={venue.link}>
                        <button className="map-popup-button" type="submit" formtarget="_blank">{venue.description}</button>
                    </form>
                        {/* <button href={venue.link}>
                            {venue.description}
                        </button> */}
                    {/* <a className='poup-text' href={venue.link}>{venue.description}</a> */}
                </Popup>
                </Marker>
            ))}
            </MapContainer>
            
        </div>
    )
}

export default MyMap;