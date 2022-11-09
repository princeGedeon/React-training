import React, { Component } from 'react';
import Cars from './Cars';
import Myheader from './Myheader';
import Wrapper from './Wrapper';
class Mycars extends Component {

    state={
        cars: ["Ford","Mercedes","Peugeot"]
    }
    render() {
        return (
            <div>
                <Wrapper>
                <Myheader
               
                >{this.props.title}</Myheader>
                </Wrapper>

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
