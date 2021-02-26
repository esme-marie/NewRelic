import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"; //deleted withRouter, BrowserRouter,
// import MessageForm from './components/messageForm';
import ThreeHome from "./components/Three";
import APOD from "./components/apod";
import QuizForm from "./components/quiz";
// import MessageQuotes from './components/messageQuotes';
import GetLeaderBoard from "./components/getleaderboard";
import Globalforestwatch from "./components/Globalforestwatch";
import LeafMap from "./components/MyMap";
import InstaLinks from "./components/instaLinks";
import MessageForm from "./components/messageForm";
// import Navbar from './components/Navbar';

class Routes extends Component {
  render() {
    return (
      <div>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/apod" component={APOD} />
        <Route path="/donate" component={LeafMap} />
        <Route path="/message" component={MessageForm} />
        <Route path="/instaLinks" component={InstaLinks} />
        <Route path="/Globalforestwatch" component={Globalforestwatch} />
        <Route path="/quiz" component={QuizForm} />
        <Route path="/getleaderboard" component={GetLeaderBoard} />
        <Route exact path="/" component={ThreeHome} />
        <Route path="/home" component={ThreeHome} />
      </Switch>
      </div>
    );
  }
}

export default Routes;
