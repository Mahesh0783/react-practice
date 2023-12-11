import React, { useEffect } from 'react'
import axios from 'axios'

function ApiPut() {
    useEffect(()=>{
        update()

    },[])

    function update() {
        const body =

        {
            "userId": 1,
            "id": 1,
            "title": "Welcome to MB",
            "body": "Back End Developer",
        }
        axios.put('https://jsonplaceholder.typicode.com/posts/1', body).then((response) => {
            console.log('successfully updated', response.data);
        })
    }
    
    

  return (
    <div>ApiPut</div>
  )
}

export default ApiPut