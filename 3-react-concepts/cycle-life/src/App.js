import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle'
export default class App extends Component {
  
  state={
    display:true,
  }

  effaceAffiche=()=>{
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    const showComponent= this.state.display ?(<LifeCycle name="Livaï"/>):(<div></div>);
    return (
      
        <div className="App">

<button onClick={()=>this.effaceAffiche()}>Cliquer ici</button>
      {showComponent}
</div>
      
    )
  }
}
