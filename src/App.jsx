import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Jane : {
        firstname: "Jane",
        lastname: "Doe",
        age: 45,
        haircolor: "Black"
      },
      John : {
        firstname: "John",
        lastname: "Smith",
        age: 88,
        haircolor: "Brown",
      },
      Millard: {
        firstname: "Millard",
        lastname: "Fillmore",
        age: 50,
        haircolor: "Brown",
      },
      Maria: {
        firstname: "Maria",
        lastname: "Smith",
        age: 62,
        haircolor: "brown",
      }
    }
  }
  
  render(){
    return (
      <div className="App">
        <PersonCard 
        person={this.state.Jane}
        />
        <PersonCard 
        person={this.state.John}
        />
         <PersonCard 
        person={this.state.Millard}
        />
         <PersonCard 
        person={this.state.Maria}
        />
      </div>
    );
  }
}


export default App;
