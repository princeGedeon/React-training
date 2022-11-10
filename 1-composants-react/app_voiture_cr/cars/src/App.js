
import './App.css';
import Mycars from './Components/Mycars';

import React, { Component } from 'react'
import Welcome from './Components/Welcome';
export default class App extends Component {
 
  state={
  
    title:"Mon catalogue de voitures",
    color:"green"
  
  };

  inputTitle=(e)=>{
    this.setState(
      {
        title:e.target.value,
      }
    )
  }
  changeTitle=(e)=>{
    this.setState({
        title:"Mon nouveau titre",
    })
}
  render() {
    return (
      <div className='App'>
        <Welcome/>
        <Mycars color={this.state.color}  title={this.state.title}/>

        
      </div>
    )
  }
}