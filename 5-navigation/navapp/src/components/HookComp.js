import React, { Component } from 'react';

class HookComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }
    
    addOne(){
        this.setState({
            counter:this.state.counter+1,
        })
    }
    render() {
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <div>
                Hello World

                <p>Class State : {this.state.counter}</p>
                <button className="px-6 py-2 bg-blue-600 rounded-md" onClick={()=>this.addOne()}>Click</button>
                </div>
            </div>
        );
    }
}

export default HookComp;