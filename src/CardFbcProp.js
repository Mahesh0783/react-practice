import React, { Component } from 'react'

export default class CardFbcProp extends Component {
    constructor(props){
        super(props)
        this.props=props;
    }
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
