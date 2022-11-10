import React, { Component } from 'react';
import Toto from './Toto';
class Maman extends Component {
    state={
        messageMaman:null,
        messageToto:null,
    }

    ordreMaman=()=>{
            this.setState({
                messageMaman:"Va ranger ta chambre"
            })
    }
    reponseToto=()=>{
        this.setState({
            messageToto:"D'accord maman"
        })
    }
    render() {
        return (
            <div>
                <h2>Maman</h2>

                <hr />
                <button onClick={()=>this.ordreMaman()}>Ordre de la mère</button>
                <p>{this.state.messageMaman}</p>
                <hr />

                <Toto name="toto" lestate={this.state}/>
            </div>
        );
    }
}

export default Maman;
