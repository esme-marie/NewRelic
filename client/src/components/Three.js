import React, { useState } from 'react';
// import { render } from "react-dom";
import ReactGlobe from "react-globe";
import markers from "./markers";
import markerRenderer from "./markerRenderer";
// import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
// import Navbar from './Navbar';


const options = {
  markerRenderer,
  markerTooltipRenderer: (marker) => `${marker.city}`,
};

function ThreeHome() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      console.log(theme,"theme onclick<<");
    } else {
      setTheme('light');
      console.log(theme,"theme else<<");
    }
  }
  return (
    <div className="App">
    {/* <Navbar /> */}
    <div>

    <div>
    
      {(theme === 'light') ?
        <ReactGlobe
          height="100vh"
          // globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
          markers={markers}
          width="100vw"
          options={options}
          onMouseOverMarker={(marker, markerObject, event) =>
            console.log(marker, markerObject, event)
          }
        /> :
        <ReactGlobe
          height="100vh"
          //globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
          markers={markers}
          width="100vw"
          options={options}
          onMouseOverMarker={(marker, markerObject, event) =>
            console.log(marker, markerObject, event)
          }
        />
      }
      

        {/* <div>
          <h3>[team name]</h3>
          <header>
            <a href="/Globalforestwatch" className="top-left" children="Explore real time data with Global Forest Watch" />
            <a href='/Quiz' className="top-right" children="Quiz" />
            <a href="/message" className="bottom-center" children="Send queries or nominate your organisation" />
            <a href="/instaLinks" className="bottom-right" children="Follow Sustainable Insta" />
            <a href="/map" className="bottom-left" children="Leaflet Map" />
          </header>
          </div> */}
      </div>
      </div>
    </div>
  );
}

export default ThreeHome;

