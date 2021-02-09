import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import MessageForm from './components/messageForm';
import ThreeHome from './components/Three';
import APOD from './components/apod';
import solarscope from './components/solarscope';
// import quiz from './components/quiz';
import QuizForm from './components/quiz';
import MessageSuprise from './components/messageSurprise';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/message" component={MessageForm} />
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/quiz" component={QuizForm} />
                <Route path="/messageSurprise" component={MessageSuprise} />
                {/* <Route path="/" component={Home} /> */}
                <Route path="/" component={ThreeHome} />
                <Route path="/home" component={ThreeHome} />
                
            </Switch>
        )
    }
}

export default Routes;