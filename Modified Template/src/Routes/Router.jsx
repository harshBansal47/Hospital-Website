import React from 'react'
import { Route,Routes } from "react-router-dom"
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Vides from '../Pages/OrthopedicVideos/Vides'
import Presenation from '../Pages/Presentations/Presenation'
import Cv from '../Pages/Cv/Cv'
import Layout from './Layout'

const Router = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Layout/>} >
        <Route index element = {<Home/>} />
        <Route path = 'about' element = {<About/>} />
        <Route path='vides' element = {<Vides/>} />
        <Route path='presentation' element = {<Presenation/>}/>
        <Route path='cv' element = {<Cv/>}/>
      </Route>
    </Routes>
  )
}

export default Router