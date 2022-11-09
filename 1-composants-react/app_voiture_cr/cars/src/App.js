
import './App.css';
import Mycars from './Components/Mycars';

import React, { Component } from 'react'

export default class App extends Component {
 
  state={

    title:"Mon catalogue de voitures",
    color:"green"
  
  };
  render() {
    return (
      <div className='App'>
        <Mycars color={this.state.color} title={this.state.title}/>
      </div>
    )
  }
}
