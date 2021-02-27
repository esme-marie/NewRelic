import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThreeHome from "./components/Three";
import QuizForm from "./components/quiz";
import Globalforestwatch from "./components/globalforestwatch";
import LeafMap from "./components/MyMap";
import Shop from "./components/shop";
import MessageForm from "./components/messageForm";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/takeAction" component={LeafMap} />
        <Route path="/shop" component={Shop} />
        <Route path="/globalforestwatch" component={Globalforestwatch} />
        <Route path="/quiz" component={QuizForm} />
        <Route path="/message" component={MessageForm} />
        <Route exact path="/" component={ThreeHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

