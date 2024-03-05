import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default Allroutes