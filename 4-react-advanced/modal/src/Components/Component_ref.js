import React, { Component, createRef } from 'react';
import './../index.css';
class ComponentRef extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value:""
      }

      this.title=createRef();
      this.input=createRef();
    }

    handleupdate=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    handleClick=()=>{
        console.log(this.input.current.value);
    }

    addFocus=()=>{
        this.input.current.focus();
    }
    render() {
        return (
            <div>
               
                    <input className='input' ref={this.input} type="text" />
                    
             </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        this.title.current.style.color ='red';
    }

    componentDidMount() {
        this.input.current.focus();
    }
}

export default ComponentRef;
