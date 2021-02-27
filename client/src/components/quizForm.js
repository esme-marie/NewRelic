import React from "react";
// import Quiz from "../components/quiz";
import {Link} from "react-router-dom";

class QuizForm extends React.Component {
    		constructor() {
    			super()
    			this.state = {
					value: "",
    				input: "",
					score: [],
    			}
    		}
            
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
    