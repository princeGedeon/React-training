import React, { Component } from 'react'

export default class Form extends Component {

    state={
        username:"",
        color:"",
        colors:["blue","red","green","black"],
        comment:""
    }

    handleComment=e=>{
      this.setState({
          comment:e.target.value,
      })
  }

    handlePseudo=e=>{
        this.setState({
            username:e.target.value,
        })
    }

    handleColor=e=>{
      this.setState({
        color:e.target.value,
      })
    }

    handleForm=e=>{
      e.preventDefault();
      console.log(`Username: ${this.state.username} Commentaire: ${this.state.comment}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
            <label>Psuedo</label>
            <input type="text" value={this.state.username} onChange={this.handlePseudo} />

            <label>Colors</label>
            <select value={this.state.color} onChange={this.handleColor}>
            {
              this.state.colors.map((item)=>{
                return <option value={item}>{item}</option>
              })
            }
              </select>

              <textarea value={this.state.comment} onChange={this.handleComment}>

              </textarea>

              <input type="submit" value="Click" />
        </form>
      </div>
    )
  }
}
