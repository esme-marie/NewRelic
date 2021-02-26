import React from "react";
// import Quiz from "../components/quiz";
import {Link} from "react-router-dom";

class QuizForm extends React.Component {
    		constructor() {
    			super()
    			this.state = {
					value: "",
					userName : null,
    				user_id: null,
    				input: "",
					score: [],
					
                    
    			}
    			this.handleInputScore = this.handleInputScore.bind(this);
    			this.handleUserName = this.handleUserName.bind(this);
    			this.submitScore = this.submitScore.bind(this);
                // this.getLeaderboard =this.getLeaderboard.bind(this);
    		}
            
    		handleInputScore(e) {
    			e.preventDefault(); 
    			this.setState({
    				input: e.target.value,
    			});
                
    		};
        
    		// handleUserId(e) {
    		// 	e.preventDefault(); 
    		// 	this.setState({
    		// 		value: e.target.value,
    		// 	});
			// };
			
			handleUserName(e) {
    			e.preventDefault(); 
    			this.setState({
    				value: e.target.value,
    			});
    		};
            
    		componentDidMount() {
    			fetch("/users")
    			.then(res => res.json())
    			.then(data => {
    				this.setState({
    					userName: data,
    					score: data
    				})
    			})
    			.catch(err => {
    				console.log(err);
    			});
                
    		}
    
    		submitScore(){
    		alert("Score submitted")
    		fetch("/users/quiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // user_id: this.state.value,
					score: this.state.input,
					userName : this.state.value
                })
            })
            .then(res => {
                res.json();
                // this.componentDidMount();
                //alert("Submitted");
            })
            	
              .catch(error => {
                console.log(error);
			  });
			 
		}
		
		// getscore(){
		// 	alert("getting score board")
		// 		axios.get("/users/quiz")
		// 				.then(({data}) => {
		// 				this.setState({leaderboard:data})
		// 				})
		// 			  .catch((err) => console.log(err))
		// 			}

    		render(){
                
    		return (                      
    					<div>
    						<div id="QuizForm">                            
    								<form>                                           
    								<br />
    								<div className="QuizForm">
    									<label htmlFor="user name">Your User Name</label>
    									<div className="form-inputs">
    										<input
    										defaultvalue={this.state.userName}
    										type="text"
    										onChange={e => this.handleUserName(e)}
    										/>
    									</div>
    								</div> 
    								<br />
				
    								<div className="QuizForm">
    									<label htmlFor="score">Your Score</label>
    									<div className="form-inputs1">
    										<input
    										defaultvalue={this.state.score}
    										onChange={e => this.handleInputScore(e)}
    										/>
    										{/* <span id="charLimit">(150 characters limit)</span> */}
    										<span>
											<button 
    											id="messageButton" 
    											type="submit"
    											onClick={e => this.submitScore(e)}
    											>
    											Submit your score
    										</button>
											</span>
											
    									</div>
    								</div>
									<Link to="/Globalforestwatch">
                                <button className="submittedButton"
                                type="submit">
                                Watch real time World Forest Map and Tree Cover Change Data!
                                </button>
                            </Link>
    								</form>
							</div>

							
							{/* <table className="leader board"> */}
							{/* <button
								id = "getLeaderboardButton"
								type ="submit"
								onClick={this.getLeaderboard.map(e =>{
									return(<li key ={e.userName} score ={e.score}/>)
								})} // i need to map?
								>
									Get Leader Board
								</button> */}
								{/* <select id="getLeaderBoard" value={this.state.userName} onChange={this.onChange}>
                                {this.getLeaderboard.map((e) => {
                                    return <option key={e.id} value={this.state.userName} score ={this.state.score}>{this.state.userName}</option>
                                })}
                            </select> */}

								{/* {/* <thead>
									<tr>
									<th name = "col">Username</th>
									<th score = "col">Score</th>
									</tr>
								</thead>
								<tbody>
									<td>
								{/* {this.getLeaderboard.map(e =>{
									return (<li key={e.userName} score={e.score}/>)
								})}
									 */}
								
									
								
								{/* </tbody>
							</table> */}
							
							
                            
							
    					</div>  
    				)
    			}
    		}
    
    export default QuizForm;
    