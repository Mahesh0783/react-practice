import React from 'react'
import { useParams } from 'react-router-dom'

function CourseFbc() {
    const url=useParams()
  return (
    <div>Welcome to {url.name} Course</div>
  )
}

export default CourseFbc