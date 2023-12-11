import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }
    handleUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    handlePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.username, this.state.password )
    }
  render() {
    return (
      <div>
        <h1>LoginForm</h1>
        <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleUsername}></input>
        <input type='password' onChange={this.handlePassword}></input>
        <input type='submit' name='submit' value='submit'/>
        </form>
      </div>
    )
  }
}
