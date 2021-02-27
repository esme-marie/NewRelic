import React, { Component } from "react";
import MessageSubmitted from "../components/messageSubmitted";
// import MessageQuotes from "../components/messageQuotes";
class MessageForm extends Component {
    constructor() {
        super()
        this.state = {
            typeName: "",
			name : null,
    		typeUrl: "",
    		url: null,
            typeEmail:"",
            email: null,
            typeOrg: "",
            org: null,
            input: "",
            message: [],
            value: "",
            options: [

                
                {id: 1, name: "Western Europe"}, 
                {id: 2, name: "Central and Eastern Europe"}, 
                {id: 3, name: "Asia Pacific"},
                {id: 4, name: "Africa"},
                {id: 5, name: "Mediterannean&Middle East"},
                {id: 6, name: "Americas"},
                {id: 7, name: "Australia"},
                {id: 8, name: "Other Oceania(New Zealand,Melanesia,Micronesia,Polynesia"},
                {id: 9, name: "All"},
            ],
            submitted: false
        }
        // this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this);

    };

    onChange(e) {
        // const { value } = e.target;
        // alert(value);
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
            // name: "",
            // message: "",
            // planets: ""
            message: data,
            planets: data
        });
    })
    .catch(err => {
        console.log(err);
    });
    }

    // submit message
    submitMessage() {
        this.setState({
            value: "",
            input: "",
            submitted: true
        })
        alert("Message received!");
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
            // this.componentDidMount();
            alert("Submitted");
        })
        // .then(data => {
        //     //console.log("data with id", data);
        //     const updatedMessage = [
        //       {
        //         id: data.insertID,
        //         message: this.state.input,
        //         planet_id: this.state.value
        //       }
        //     ];
        //     this.setstate({ message: [...this.state.message, ...updatedMessage] });
        //     console.log(this.state.message);
        //   })
        .catch(error => {
            console.log(error);
        })
    }
    
    


    render() {
        const {value, options} = this.state;
        return this.state.submitted ? (
            <MessageSubmitted />
        ) : (
            <div>
                <div id="messageForm">
                    <div>
                            <h2>Contact us</h2>
                            <h4>Interested to know more about deforestration in your region?
                            Can't find the organisation of interest? </h4>
                            <h4>Send us your queries in the form below for more info or nominate your organisation
                            </h4>
                            <div className="form-inputs1">
                            <label htmlFor="options">Pick a region of interest(Or you can opt to select All)</label>
                            <select id="options" value={value} onChange={e => this.onChange(e)}>
                                {options.map((planet) => {
                                    return <option key={planet.id} value={planet.id}>{planet.name}</option>
                                })}
                            </select>
                            </div>
                            <br />
                            <br />
                
                            <div className="form-group">
                                {/* <label htmlFor="your message">Your message</label> */}
                                <div className="form-inputs">
                                    
                                <label htmlFor="user name">Name</label>
    								    <input
                                            name="message"
                                            
                                            placeholder="Type your name here..."
    										defaultvalue={this.state.name}
    										type="text"
    										onChange={e => this.handleName(e)}
    										/>

                                <label htmlFor="user name">Email</label>
    								    <input
                                            name="message"
                                            
                                            placeholder="type your email so we can get back to you..."
    										defaultvalue={this.state.email}
    										type="text"
    										onChange={e => this.handleEmail(e)}
    										/>

                                <label htmlFor="user name">Organisation Name</label>
    								    <input
                                            name="message"
                                            
                                            placeholder="type your organisation name here..."
    										defaultvalue={this.state.org}
    										type="text"
    										onChange={e => this.handleOrg(e)}
    										/>
                                <label htmlFor="user name">Organisation URL</label>
    								    <input
                                            name="message"
                                            placeholder="type your organisation Url here..."
    										defaultvalue={this.state.url}
    										type="text"
    										onChange={e => this.handleUrl(e)}
    										/>
    							<label htmlFor="user name">Your Message or Query</label>
                                        <textarea
                                    // value={this.state.message}
                                            name="message"
                                            type="textarea"
                                            placeholder="Type your message..."
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
                        {/* </form>  */}
                </div>
                
            </div>
        )
    }
}

export default MessageForm;

