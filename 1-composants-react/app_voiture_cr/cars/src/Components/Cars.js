import React from 'react';

const Cars = ({marque,couleur}) => {
    const colorInfo= couleur?( <p>Couleur : {couleur} </p>):(<p>Couleur : Néant</p>);
    return (
        <div className='cars' style={ {
            backgroundColor: 'pink',
            width:'300px',
            padding:"15px",
            margin: '5px auto'
        }}>
            <p>Marque  : {marque} </p>
            {colorInfo}
        </div>
    );
}

export default Cars;
