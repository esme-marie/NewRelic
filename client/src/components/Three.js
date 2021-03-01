import React from 'react';
import ReactGlobe from "react-globe";
import markers from "./markers";
import markerRenderer from "./markerRenderer";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const options = {
  markerRenderer,
  markerTooltipRenderer: (marker) => `${marker.city}`,
};
  
function ThreeHome() {
  return (
    <div className="App text-position">
      <h3 className="text-center">Can you find an orangutan?</h3>
      <p className="text-center">Explore the globe by clicking on colored markers</p>
        <ReactGlobe
          height="85vh"
          markers={markers}
          width="100vw"
          options={options}
          onMouseOverMarker={(marker, markerObject, event) =>
            console.log(marker, markerObject, event)
          }
        />
      </div>
  );
}

export default ThreeHome;