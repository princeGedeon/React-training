
import './App.css';
import Mycars from './Components/Mycars';

import React, { Component } from 'react'

export default class App extends Component {
 
  state={
    title:"Mon catalogue de voitures"
  };
  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.title}/>
      </div>
    )
  }
}
