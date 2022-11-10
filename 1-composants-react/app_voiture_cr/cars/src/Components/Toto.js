import React from 'react';

const Toto = (props) => {
   const btnrespoToto=props.lestate.messageMaman!=null ?(<button >Réponse</button>):<button disabled >Réponse</button>
    return (
        <div>
            <h2>{props.name}</h2>
            {btnrespoToto}
        </div>
    );
}

export default Toto;
