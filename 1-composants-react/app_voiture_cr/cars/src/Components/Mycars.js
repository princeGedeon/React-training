import React, { Component } from 'react';
import Cars from './Cars';
import Myheader from './Myheader';
import Wrapper from './Wrapper';
class Mycars extends Component {

  state={

    voitures:[
      {id:0,
        marque:"Ford",
        color:"red",
        annee:2000
      },
      {
        id:1,
        marque:"Mercedes",
        color:"blue",
        annee:2022
      },
      {
        id:2,
        marque:"Toyoa",
        color:"rfed",
        annee:2003
      }
    ]
  
  };

   
    addStyle=(e)=>{
        if (e.target.classList.contains('styled'))
        {
            e.target.classList.remove('styled');
        }
        else{
            e.target.classList.add('styled');
        }
            
    }
 noCopy=()=>{
    alert("Non bg, ce n'est pas a copié");
  }

  addtenClick=(e)=>{
    
    const updatedState=this.state.voitures.map((item)=> item.annee+=10);
    this.setState({
        updatedState
    })
  }
   
  getAge=(year)=>{
    const now=new Date().getFullYear();
    const age=now-year;

    let frenchYearStr;
    if (age===1){
        frenchYearStr="an";
    }
    else if (age === 0){
        frenchYearStr="";

    }
    else{
        frenchYearStr="ans";

    }
    return `${age} ${frenchYearStr}`;
  }
    render() {
        const  yearfull=new Date().getFullYear();


        return (
            <div>
               
                <h1 className='App' onMouseOver={this.addStyle}>{this.props.title}</h1>
                 

                <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vitae, non voluptas cumque facilis porro blanditiis, dolores libero excepturi voluptatibus ut pariatur! Maiores nemo corporis asperiores voluptatum cumque. Deleniti, doloribus?</p>
                <button onClick={this.addtenClick}>Update +10</button>
                <div>
                    {this.state.voitures.map((item)=>  <Cars key={item.id} marque={item.marque} annee={this.getAge(item.annee) } couleur={item.color} />)}
                   
                    
                </div>
                
            </div>

        );
    }
}

export default Mycars;
