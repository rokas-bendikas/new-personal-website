import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdScience} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'

import  {NavLink} from 'react-router-dom'

import "./Nav.css"

const WebsiteNavbar = () => {
    return(
        <nav>
            <NavLink to='/'><AiOutlineHome /></NavLink>
            <NavLink to='/projects'><AiOutlineUser /></NavLink>
            <NavLink to='/publications'><MdScience /></NavLink>
            <NavLink to='/contacts'><AiOutlineMail /></NavLink>
        </nav>
    );   
}

export default WebsiteNavbar