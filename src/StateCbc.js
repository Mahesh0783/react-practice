import React, { Component } from 'react'

export default class StateCbc extends Component {
    constructor(){
        super()
        this.state={
            name:"Mahesh",
            city:"Hyd",
            job:"Front End Developer"
        }
    }
    handleUpdate=()=>{
        this.setState({
            name: "Mahesh Babu",
            city: "vizag",
            job: "Full Stack Web Developer"
        })
        
    }
     // Update State
  render() {
    return (
      <div>
        <p> {this.state.name}</p>
        <p> {this.state.city}</p>
        <p> {this.state.job}</p>
        <button onClick={this.handleUpdate}>Update Detais</button>
      </div>
    )
  }
}
