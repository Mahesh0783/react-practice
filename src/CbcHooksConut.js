import React, { Component } from 'react'

export default class CbcHooksConut extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    incrementHandler=()=>{
        this.setState({count: this.state.count + 1})
    }
    HandleIncrement =()=>{
        this.setState({count:this.state.count +2})
    }
    HandleDecrement =()=>{
        this.setState({count:this.state.count -2})
    }
  render() {
    return (
        <>
      <div>counter {this.state.count}</div>
      <button onClick={this.incrementHandler}>Increment Count</button>
      <button onClick={this.HandleIncrement}>Increment By 2</button>
      <button onClick={this.HandleDecrement}>Decrement By 2</button>
        </>
    )
  }
}
