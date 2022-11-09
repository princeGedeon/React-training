import React, { Component } from 'react';
import Cars from './Cars';
class Mycars extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <div>
                    <Cars marque="Peugeot" couleur="Bleu" />
                    <Cars marque="BMW" />
                    <Cars marque="Toyota" couleur="Rouge"/>
                </div>
            </div>
        );
    }
}

export default Mycars;
