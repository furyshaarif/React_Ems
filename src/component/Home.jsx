import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const nav =useNavigate()
  
  const toggel =()=>{
    nav('/Signup')
  }

  return (
    <div><h1>
        Employee menu
        </h1>
       <button onClick={toggel}>
            Add New Employee Dataaaaa
      </button> 
      
      
        </div>
  )
}

export default Home
