// import {Link} from "react-router-dom";
import React from "react";
import ThreeStars from '../components/ThreeStars';
import InstagramEmbed from 'react-instagram-embed';



export default class MessageSubmitted extends React.Component {
    render() {
        return (
            <div>
                <ThreeStars />
                <div id="particles">
                </div>
                    <div id="messageSubmitted">
                            <h2>⏁⊑⏃⋏☍ ⊬⍜⎍</h2>
                            <h3>It means 'thank you' in alien language!</h3>
                            <br/>
                            <p>Your message is on its way to the aliens!</p>
                            <p>In the meantime, click the button below to discover inspirational quotes from great people to inspire you 🚀✨</p>
                            <div className="container-submit">
                            </div>
                    </div>
                    <InstagramEmbed
  clientAccessToken='NewRelic|260666962287072'
  url='https://instagr.am/p/Zn1Xz/'
  maxWidth={375}
  hideCaption={false}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
            </div>
        )
    }
}

