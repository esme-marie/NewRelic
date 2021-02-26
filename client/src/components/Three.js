import React, { useState } from 'react';
// import { render } from "react-dom";
import ReactGlobe from "react-globe";
import markers from "./markers";
import markerRenderer from "./markerRenderer";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";


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
      
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="transparent">
        <Navbar.Brand href="#home">
          {/* <Logo
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          VicTrees
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Globalforestwatch">Forest Watch</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Quiz">Quiz</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Item href="/donate">Take Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Item href="/instaLinks">
                Shop 
                Sustainably
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Item href="/message">Get In Touch</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <button onClick={toggleTheme}>Theme</button>
        </Navbar.Collapse>
      </Navbar>

      <div>
      {(theme === 'light') ?
        <ReactGlobe
          height="100vh"
          globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
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

        
      </div>

    </div>
  );
}

export default ThreeHome;

