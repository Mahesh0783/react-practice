import React from 'react'
import UseConCompC from './UseConCompC'

function UseConCompB(props) {
  return (
    <div>UseConCompB-{props.name}
       <UseConCompC name={props.name}/>
       </div>
  )
}

export default UseConCompB