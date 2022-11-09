import React, { Component } from 'react';
import Cars from './Cars';
import Myheader from './Myheader';
import Wrapper from './Wrapper';
class Mycars extends Component {
    changeTitle=(e)=>{
        this.setState({
            title:"Mon nouveau titre",
        })
    }
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
    state={
        cars: ["Ford","Mercedes","Peugeot"]
    }
    render() {
        return (
            <div>
               
                <h1 className='App' onMouseOver={this.addStyle}>{this.props.title}</h1>
                 

                <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vitae, non voluptas cumque facilis porro blanditiis, dolores libero excepturi voluptatibus ut pariatur! Maiores nemo corporis asperiores voluptatum cumque. Deleniti, doloribus?</p>

                <div>
                    <Cars marque="Peugeot" couleur="Bleu" />
                    <Cars marque="BMW" />
                    <Cars marque="Toyota" couleur="Rouge"/>
                </div>
                <button onClick={this.changeTitle}>Changer en dure</button>
            </div>

        );
    }
}

export default Mycars;
