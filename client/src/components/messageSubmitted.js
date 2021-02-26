// import {Link} from "react-router-dom";
import React from "react";
import ThreeStars from '../components/ThreeStars';
import {Link} from "react-router-dom";



export default class MessageSubmitted extends React.Component {
    render() {
        return (
            <div>
                <ThreeStars />
                <div id="particles">
               
                
                </div>
                    <div id="messageSubmitted">
                            
                            <h3>Thank you on behalf of the trees</h3>
                            <br/>
                            <p>Your message is on its way to Victrees!</p>
                            <p>In the meantime, do find our other resources at our home page✨</p>
                            
                            <div className="container-submit">
                            
                            </div>
                            <div>
                            <Link to="/">
                                <button className="submittedButton" text-align="center"
                                type="submit">
                                Home
                                </button>
                            </Link>
                            </div>
                    </div>
                    
            </div>
            
        )
    }
}

