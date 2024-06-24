import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Update from './component/Update';
import Signupdata from './component/Signupdata';

const Router_dom = () => {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/Signup" element={<Signupdata/>}/>
        </Routes>

    </div>
  )
}

export default Router_dom;