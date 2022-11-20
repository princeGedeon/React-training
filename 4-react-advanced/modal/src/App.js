import React, { Component, createRef } from 'react';
import ComponentRef from './Components/Component_ref';
import Modal from './Components/Modal';
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
    }

    this.refComp=createRef();
  }

  handleshow=()=>{
    this.setState({
      showModal:true
    });
  }

  handleHide=()=>{
    this.setState({
      showModal:false
    })
  }
  handleClick=()=>{
    this.refComp.current.addFocus();
  }
  
  render() {

    const modal=this.state.showModal && <Modal close={this.handleHide}/>
    return (
      <div className="App">
      {/* <button onClick={()=>this.handleshow()}>Afficher le modal</button>
       {modal} */}
       <button onClick={this.handleClick}>Valider</button>
       <ComponentRef ref={this.refComp}/>
     </div>
    );
  }
}

export default App;
