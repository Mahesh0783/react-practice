import React, { Component } from 'react'
import "./MarksTable.css"

export default class MarksTable extends Component {
    constructor(){
        super()
        this.state={
            marks:[
                {
                    id:1,
                    name:"mamesh",
                    tel:55,
                    hin:45,
                    eng:75,
                    math:78,
                    sci:87,
                    soci:87
                 },
                {
                    id:2,
                    name:"shiva",
                    tel:55,
                    hin:45,
                    eng:75,
                    math:78,
                    sci:87,
                    soci:87
                 },
                {
                    id:3,
                    name:"ganesh",
                    tel:55,
                    hin:45,
                    eng:75,
                    math:78,
                    sci:87,
                    soci:87
                 },
                {
                    id:4,
                    name:"rakesh",
                    tel:55,
                    hin:45,
                    eng:75,
                    math:78,
                    sci:87,
                    soci:87
                 },
            ]
        }
    }
  render() {
    return (
      
        <table>
            <th>ID</th>
            <th>NAME</th>
            <th>TELUGU</th>
            <th>HINDI</th>
            <th>ENGLISH</th>
            <th>MATHS</th>
            <th>SCIENCE</th>
            <th>SOCIAL</th>
        {this.state.marks.map((row)=>{
            return(
                
            <tr>
               
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.tel}</td>
                <td>{row.hin}</td>
                <td>{row.eng}</td>
                <td>{row.math}</td>
                <td>{row.sci}</td>
                <td>{row.soci}</td>
            </tr>
            )
           
        })}
        </table>
      
    )
  }
}
