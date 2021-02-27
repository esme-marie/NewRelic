import React from "react";
import Navbar from "./components/Navbar";
// import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //deleted withRouter, BrowserRouter,
import ThreeHome from "./components/Three";
import QuizForm from "./components/quiz";
import Globalforestwatch from "./components/Globalforestwatch";
import LeafMap from "./components/MyMap";
import InstaLinks from "./components/instaLinks";
import MessageForm from "./components/messageForm";

// import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/takeAction" component={LeafMap} />
        <Route path="/instaLinks" component={InstaLinks} />
        <Route path="/Globalforestwatch" component={Globalforestwatch} />
        <Route path="/quiz" component={QuizForm} />
        <Route path="/message" component={MessageForm} />
        <Route exact path="/" exact component={ThreeHome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

