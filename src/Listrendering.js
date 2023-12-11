import React, { Component } from 'react'

 const Employee = [
    {
        id: 1,
        name: "mahesh",
        job: "full stack wed developer"
    },
    {
        id: 2,
        name: "mahesh babu",
        job: "frond end developer"
    },
    {
        id: 1,
        name: "MB",
        job: "back end developer"
    }
]

export default class Listrendering extends Component {
     
  render() {
    return (
        <div>

          {/* if you hava only employee .for example
          <p>{employee[0].id}</p>
          <p>{employee[0].name}</p>
          <p>{employee[0].jo}</p> */}
     
      {Employee.map((row)=>{
        return(
            <>
            <p>{row.id}</p>
            <p>{row.name}</p>
            <p>{row.job}</p>
            </>

        )
      })}
        </div>
      
    )
  }
}

