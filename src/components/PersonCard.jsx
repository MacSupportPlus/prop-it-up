import React, {Component} from 'react';

export default class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            newAge : this.props.person.age
            
        }
    }

    
    render(){
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{this.props.person.firstname}, {this.props.person.lastname}</h4>
                    <p class="card-text">age: {this.state.newAge}</p>
                    <p class="card-text">Hair Color: {this.props.person.haircolor}</p>
                    <button 
                    className="btn btn-success"
                    onClick={() => this.setState({newAge: this.state.newAge+1})}
                    >Birthday Button for {this.props.person.firstname} </button>
                    

                </div>
            </div>
            
          
        )
    }


}

