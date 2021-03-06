import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ]
  }

switchNameHandler = (newName) => {
  // console.log('Was clicked')
  this.setState({
    persons: [
      {name: newName, age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 36}
    ]})
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value , age: 29},
      {name: "Stephanie", age: 26}
    ]})
}



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer'

    }

    return (
      <div className="App">
        <h1>I'm a New React App</h1>
        <p >This is really working!</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Person</button>
        <Person 
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Max!!')}
          changed = {this.nameChangedHandler}
          >
          My Hobbies are</Person>
        <Person 
          name={this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
        
      </div>
    );
  }
}

export default App;
