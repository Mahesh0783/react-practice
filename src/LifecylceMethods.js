import React, { Component } from 'react'

export default class LifecylceMethods extends Component {
    constructor(){
        super()
        this.state={
            age:25
        }
    }
  render() {
    return (
      <div>
        <p>Mahesh</p>
        {this.state.age}

      </div>
    )
  }
}
