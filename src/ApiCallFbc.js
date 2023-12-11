import React, { useEffect, useState } from 'react'
import axios from 'axios'


function ApiCallFbc() {

  const [ data, setData] = useState()

  useEffect(()=>{
    getUsers()
  },[])

  function getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      setData(response.data)
    })
  }
  return (

    <table border ="1">
      <tr>
        <th> Name </th>
        <th> Username </th>
        <th>Email</th>
        <th>City</th>
      </tr>
      {data.map((row)=>{
        return(
          <tr>
          <td>{row.name}</td>
          <td> {row.username} </td>
          <td> {row.email} </td>
          <td> {row.address.city}</td>
          </tr>
          
        )
      })}
    </table>
    
  )
}

// return (

//   <div>
//     {data.map((row) => {
//       return (
//         <div>

//           <p>Name: {row.name}</p>
//           <p>Username:  {row.username} </p>
//           <p>Email:  {row.email} </p>
//           <p> City: {row.address.city}</p>
//         </div>

//       )
//     })}
//   </div>

// )
// }

export default ApiCallFbc