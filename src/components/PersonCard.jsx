import React, {Component} from 'react';

export default class PersonCard extends Component {

    
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{this.props.person.firstname}, {this.props.person.lastname}</h4>
                    <p class="card-text">age: {this.props.person.age}</p>
                    <p class="card-text">Hair Color: {this.props.person.haircolor}</p>
                    

                </div>
            </div>
            
          
        )
    }

}

