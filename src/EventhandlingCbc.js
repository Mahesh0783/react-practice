import React, { Component } from 'react'

export default class EventhandlingCbc extends Component {
    handleClick=()=>{
        console.log("button is clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Click Me</button>
      </div>
    )
  }
}
