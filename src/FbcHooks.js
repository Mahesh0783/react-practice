import React, { useState } from 'react'

function FbcHooks() {

    const[state,setState]=useState('wlc to you MB')

    function updateState(){
        setState('Welcome To You MAHESH BABU')
    }
  return (
    <div>
       <p> {state}</p>
      <button onClick={updateState}>Update</button>
    </div>
   
  )
}

export default FbcHooks