import React from 'react'
import {Routes,Route} from "react-router-dom"

import AnimationLayout from './Transitions'

import About from '../about/About'
import Projects from '../projects/Projects'
import Publications from '../publications/Publications'
import Contacts from '../contacts/Contacts'
import NotFoundError from '../errors/NotFound'

function WebRoutes() {
  return (
    <Routes>
        <Route element={<AnimationLayout/>}>
            <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/publications' element={<Publications/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path="*" element={<NotFoundError/>}/>
        </Route>
    </Routes>
  )
}

export default WebRoutes