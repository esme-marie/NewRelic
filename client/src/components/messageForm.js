import React, { Component } from "react";
import MessageSubmitted from "../components/messageSubmitted";
import Form from 'react-bootstrap/Form';

class MessageForm extends Component {
    constructor() {
        super()
        this.state = {
            typeName: "",
            name: null,
            typeUrl: "",
            url: null,
            typeEmail: "",
            email: null,
            typeOrg: "",
            org: null,
            input: "",
            message: [],
            value: "",
            options: [
                { id: 1, name: "Western Europe" },
                { id: 2, name: "Central and Eastern Europe" },
                { id: 3, name: "Asia Pacific" },
                { id: 4, name: "Africa" },
                { id: 5, name: "Mediterannean&Middle East" },
                { id: 6, name: "Americas" },
                { id: 7, name: "Australia" },
                { id: 8, name: "Other Oceania(New Zealand, Melanesia, Micronesia, Polynesia)" },
                { id: 9, name: "All" },
            ],
            submitted: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this);

    };

    onChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    handleInput(e) {
        e.preventDefault();
        this.setState({
            input: e.target.value,
        });
    };

    handleEmail(e) {
        e.preventDefault();
        this.setState({
            typeEmail: e.target.value,
        });

    };

    handleOrg(e) {
        e.preventDefault();
        this.setState({
            typeOrg: e.target.value,
        });
    };

    handleUrl(e) {
        e.preventDefault();
        this.setState({
            typeUrl: e.target.value,
        });
    };

    handleName(e) {
        e.preventDefault();
        this.setState({
            typeName: e.target.value,
        });
    };

    componentDidMount() {
        fetch("/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    message: data,
                    planets: data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    submitMessage() {
        this.setState({
            value: "",
            input: "",
            submitted: true
        })
        console.log(this.state.value);
        fetch("/users/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: this.state.input,
                planet_id: this.state.value
            })
        })
        .then(res => {
            res.json();
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return this.state.submitted ? (
            <MessageSubmitted />
        ) : (
                <div>
                    <div id="messageForm">
                        <div>
                            <h2>Contact us</h2>
                            <h4>Keen to add an organisation of interest on the globe?</h4>
                            <h4>Send us your queries in the form below</h4> 

                            <div className="form-group">
                                <div className="form-inputs">
                                    <label>Name</label>
                                    <input 
                                        required
                                        name="message"
                                        defaultvalue={this.state.name}
                                        type="text"
                                        onChange={e => this.handleName(e)}
                                    />
                                    <label>Email</label>
                                    <input
                                        required
                                        name="message"                                    
                                        defaultvalue={this.state.email}
                                        type="text"
                                        onChange={e => this.handleEmail(e)}
                                    />
                                    <label>Organisation Name</label>
                                    <input
                                        name="message"                                      
                                        defaultvalue={this.state.org}
                                        type="text"
                                        onChange={e => this.handleOrg(e)}
                                    />
                                    <label>Organisation URL</label>
                                    <input
                                        name="message"                                       
                                        defaultvalue={this.state.url}
                                        type="text"
                                        onChange={e => this.handleUrl(e)}
                                    />
                                    <label>Your Message or Query</label>
                                    <textarea
                                        name="message"
                                        type="textarea"                                      
                                        defaultValue={this.state.input}
                                        onChange={e => this.handleInput(e)}
                                        maxLength="150"
                                    />
                                    <span id="charLimit">(150 characters limit)</span>
                                    <button
                                        className="btn btn-lg btn-block"
                                        id="messageButton"
                                        type="button"
                                        onClick={e => this.submitMessage()}
                                    >
                                        Submit 🚀✨
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default MessageForm;

