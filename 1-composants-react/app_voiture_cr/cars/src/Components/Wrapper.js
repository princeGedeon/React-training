import React from 'react';

const Wrapper = (props) => {
    return (
        <div className='cars' style={ {
            backgroundColor: 'pink',
            width:'300px',
            padding:"15px",
            margin: '5px auto'
        }}>
            
            {props.children}
        </div>
    );
}

export default Wrapper;
