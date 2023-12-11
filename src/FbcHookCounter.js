import React, { useState } from 'react'

function FbcHookCounter() {
   const[counter,setState] =useState(0)

   function incrementCounter(){
    setState(counter +1)
   }
   function decrementCounter(){
    setState(counter -1)
   }
  return (
    <div>
        <p>Counter:{counter}</p>
        <button onClick={incrementCounter}>Increment Counter</button>
        <button onClick={decrementCounter}>Decrement Counter</button>
    </div>
  )
}

export default FbcHookCounter