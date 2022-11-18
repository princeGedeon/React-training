import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className='modal'  onClick={this.props.close}>
                 <div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure magnam nam, incidunt repellendus adipisci deserunt facere, et ipsam ratione odio accusantium obcaecati atque quidem! Sint!</p>
                 
                    <button>Fermer le modal</button> 
                 </div>
            </div>
        );
    }
}

export default Modal;
