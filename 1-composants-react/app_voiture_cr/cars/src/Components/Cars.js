import React from 'react';
import Wrapper from './Wrapper';
const Cars = ({marque,couleur}) => {
    const colorInfo= couleur?( <p>Couleur : {couleur} </p>):(<p>Couleur : Néant</p>);
    return marque && (
        

         <Wrapper>
                


                <p>Marque  : {marque} </p>
                {colorInfo}

            </Wrapper>
        
    );
}

export default Cars;
