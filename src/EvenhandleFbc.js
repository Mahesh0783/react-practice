import React from 'react'

function EvenhandleFbc() {

     const handleClick=()=>{
        console.log("this is function based EvenHandlig");
    }
  return (
    <div>
        <button onClick={handleClick}>this is FBC</button>
    </div>
  )
}

export default EvenhandleFbc