import React from 'react';

const Toto = (props) => {
                <Toto name="toto" c={this.reponseToto} lestate={this.state}/>
   const btnrespoToto=props.lestate.messageMaman!=null ?(<button onClick={props.reponseToto} >Réponse</button>):<button disabled >Réponse</button>
    return (
        <div>
            <h2>{props.name}</h2>
            {btnrespoToto}
            <p>{props.reponse}</p> 
        </div>
    );
}

export default Toto;
