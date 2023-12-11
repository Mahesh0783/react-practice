import React, {useState ,useEffect } from 'react'

function FetchFbc() {
    const [data,setData]= useState({})

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(resp => setData(resp))

    },[])
  return (
    <div>
        {data.id}
        {data.title}
    </div>
  )
}

export default FetchFbc