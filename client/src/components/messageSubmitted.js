import React from "react";
import ThreeStars from '../components/ThreeStars';

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
                        <p>Your message is on its way to Victrees! ✨</p>
                        <a className="btn btn-secondary btn-lg text-light" href="/">Home</a>
                    </div>  
            </div>
            
        )
    }
}

