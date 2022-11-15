import React, { Component } from 'react'
import './../styles/life.css';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     name:'Totos',
     step:1
    }
    console.log(`Etape ${this.state.step}: Je suis dans le constructor`);
  }
  

  componentDidMount() {
    console.log(`Etape ${this.state.step}: Je suis dans le CompoentDidMount()`);
 
    this.setState({
        
            name:this.props.name ,
            step:this.state.step +1
        
    })

    console.log(`Ètape ${this.state.step} : Update apres setState Mise a jour DOM`)
}



    componentDidUpdate(prevProps, prevState) {
        console.log(`Ètape ${this.state.step} : Dans ComponentDidUpdate()`);
        console.log(prevState);
        console.log(this.state);
    }
    
    render() {
        console.log(`Etape ${this.state.step}: Je suis dans le render`);
    return (
        <div className='bord'>
        {console.log(`Etape ${this.state.step}: Mise a jour du DOMs`)}
        
      <div>Hello Worlds</div>
  
      <p>Chargement : {this.state.step }</p>
  
        <p>Nom : {this.state.name}</p>

      </div>
    )
  }

  componentWillUnmount() {
    console.log("Je suis dans unmount");
  }
}
