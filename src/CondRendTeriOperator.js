import React, { Component } from 'react'
import './Person'
import './Vote'

export default class CondRendTeriOperator extends Component {
    constructor(){
      super()
        this.state={
            age:19
        }
    }
  render() {
    return (
      <div>
        {this.state.age> 18 }
      </div>
    )
  }
}
