import React from 'react';
import Wrapper from './Wrapper';
const Cars = ({marque,couleur,annee}) => {
    const colorInfo= couleur?( <p>Couleur : {couleur} </p>):(<p>Couleur : Néant</p>);
    return marque && (
        

         <Wrapper>
                


                <p>Marque  : {marque} </p>
                <p>Année  : {annee} </p>
                {colorInfo}

            </Wrapper>
        
    );
}

export default Cars;
