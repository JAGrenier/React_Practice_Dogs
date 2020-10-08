import React from 'react';
import './App.css';
import Card from './Component/Card';
import Form from './Component/Form';
import Names from './Component/Names';

class App extends React.Component{
  state = {
    dogs: [],
    names: []
  }
  
    

  addGoodDog = (name) =>{
    this.setState({
      names: [...this.state.names, name]
    })
  }

  handleClick = (event) => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({dogs: data.message}))
    } 

  render(){
    return (
      <div className="App">
          <h1>Cute Doggos</h1>
          <button onClick={this.handleClick}> Fetch A Cute Doggo</button>
          <Card dogs={this.state.dogs} />
          <Form addGoodDog = {this.addGoodDog}/>
          <Names />
      </div>
    );
  }
}

export default App;
