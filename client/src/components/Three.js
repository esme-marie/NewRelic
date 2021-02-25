
import * as React from "react";
// import { render } from "react-dom";
import ReactGlobe from "react-globe";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import markers from "./markers";
import markerRenderer from "./markerRenderer";

const options = {
  markerRenderer,
  markerTooltipRenderer: marker => `${marker.city}`
};

function ThreeHome() {
  return (
    <div className="App">
      <ReactGlobe
        height="100vh"
        globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
        markers={markers}
        width="100vw"
        options={options}
        onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      />
      <div>
        <h3>[team name]</h3>
        <header>
          <a href="/Globalforestwatch" className="top-left" children="Explore real time data with Global Forest Watch" />
          <a href='/Quiz' className="top-right" children="Quiz" />
          {/* <a href="/message" className="bottom-right" children="Message Aliens" /> */}
          <a href="/instaLinks" className="bottom-right" children="Shop VicTrees" />
          <a href="/apod" className="bottom-left" children="Astronomical Birthday" />
          <a href="/map" className="bottom-center" children="Leaflet Map" />
        </header>
        </div>
    </div>
  );
}

export default ThreeHome;
// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
