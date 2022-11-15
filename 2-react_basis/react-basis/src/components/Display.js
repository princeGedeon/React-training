import React, { Component } from 'react';
import Cars from './Cars';
import Form from './Form';
import Singers from './Singers';

import '../styles/cars.css';
class Display extends Component {
    render() {
        return (
            <div>
                <Cars/>
                <h1 style={{fontSize:"55px",color:"red"}}>Commentaires</h1>
                   <h3 className={`title color`}>Formulaires</h3> 
                    <Form/>
               
            </div>
        );
    }
}

export default Display;
