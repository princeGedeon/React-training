import React, { Component } from 'react';

class ChildCompnent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
        
        }
        console.log('Je suis dans le contructeur enfant');
      }

      componentDidMount() { 
        console.log('Nous sommes dans le commponentDidMount() enfant');
       }
  
      
    render() {
        console.log("Je suis dans le render() enfant");
        return (
            <div>
                {console.log('Mise a jour DOM enfant')}
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default ChildCompnent;
