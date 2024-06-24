import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signupdata = () => {

  const backnav=  useNavigate()
  const[backk,setbackk]=useState(false)

  const back =()=>{
    backnav('/')
  }
  return (
    <div>Signupdata


<button onClick={backk:false?back}>back</button>
    </div>
  
  )
}

export default Signupdata