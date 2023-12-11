import React, { useEffect } from 'react'
import axios from 'axios'

function ApiPost() {
    useEffect(()=>{
        insertPost()

    },[])

    function insertPost () {
        const body =
        {
            "userId": 101,
            "id": 101,
            "title": "Welcome to Mahesh",
            "body": "Frond End Developer",
          }
         axios.post('https://jsonplaceholder.typicode.com/posts',body).then((response)=>{
                console.log('Sucessfully inserted new user', response.data)
            })
           
    }
  return (
    <div> Post Method</div>
  )
}

export default ApiPost