import React from 'react'
import {BrowserRouter} from "react-router-dom"
import WebRoutes from "./Routes"

import WebsiteNavbar from '../navbar/Nav'
import BottomAlert from '../alert/Alert'

function AppRouter() {
  return (
    <BrowserRouter>
        <WebsiteNavbar/>
        <BottomAlert />
        <WebRoutes />
    </BrowserRouter>
  )
}

export default AppRouter