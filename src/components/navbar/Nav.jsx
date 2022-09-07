import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'

import  {NavLink} from 'react-router-dom'

import "./Nav.css"

const WebsiteNavbar = () => {
    return(
        <nav>
            <NavLink to='/'><AiOutlineHome /></NavLink>
            <NavLink to='/projects'><AiOutlineUser /></NavLink>
            <NavLink to='/publications'><BiBook /></NavLink>
            <NavLink to='/contacts'><BiMessageSquareDetail /></NavLink>
        </nav>
    );   
}

export default WebsiteNavbar