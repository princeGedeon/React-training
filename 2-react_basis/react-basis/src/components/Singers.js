import React from 'react';

const Singers = ({name,age}) => {
    return (
        <div>
            <hr/>
            <p>Chanteur : {name} </p>
            <p>     age : {age} </p>
            <hr/>
        </div>
    );
}

export default Singers;
