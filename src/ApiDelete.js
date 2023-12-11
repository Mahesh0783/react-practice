import React, { useEffect } from 'react'
import axios from 'axios'

function ApiDelete() {
    useEffect(()=>{
            deleteMethod()
    },[])

    function deleteMethod(){
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
            console.log(response.data);
        })
    }
  return (
    <div>ApiDelete</div>
  )
}

export default ApiDelete