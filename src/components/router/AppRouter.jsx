import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import About from '../about/About'
import Projects from '../projects/Projects'
import Publications from '../publications/Publications'
import Contacts from '../contacts/Contacts'
import NotFoundError from '../errors/NotFound'
import WebsiteNavbar from '../navbar/Nav'

import AnimationLayout from './Transitions'

function AppRouter() {
  return (
    <BrowserRouter>
        <WebsiteNavbar/>
        <Routes>
          <Route element={<AnimationLayout/>}>
            <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/publications' element={<Publications/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path="*" element={<NotFoundError/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter