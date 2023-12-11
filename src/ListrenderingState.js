import React, { Component } from 'react'

export default class ListrenderingState extends Component {
    constructor(){
        super()
        this.state={
            employee:[
                {
                id:1,
                name:"mahesh",
                role:"FSWD"
            },
                {
                id:2,
                name:"mahesh babu",
                role:"FEWD"
            },
                {
                id:1,
                name:"shiva",
                role:"BEWD"
            },
        ]
        }
    }
  render() {
    return (
      <div>
        {this.state.employee.map((row)=>{
            return(
                <>
                <p>{row.id}</p>
                <p>{row.name}</p>
                <p>{row.role}</p>
                </>
            )
        })}
      </div>
    )
  }
}
