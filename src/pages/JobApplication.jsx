import { useParams } from "react-router-dom"
import React from 'react'

const JobApplication = () => {

    const { id } = useParams()

  return (
    <div>
      {id}lllll
    </div>
  )
}

export default JobApplication
