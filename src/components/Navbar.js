import React, { useState } from 'react';
import logo from '../assets/gdfb_logo-nobg.png';
import { NavLink } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import Headroom from 'react-headroom';

function Navbar() {

    // const [activeLink, setActiveLink] = useState(null);

    // const handleLinkClick = (link) => {
    //     setActiveLink(link);
    // };

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }



    return (
        <Headroom>
            <div className='navbar'>
                <div className='leftSide' id={openLinks ? "open" : "close"} >
                    <img src={logo} className='logo' />
                    <h1>GDFB</h1>
                    <div className='hiddenLinks'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => 
                            [
                                isActive? 'active-link':''
                            ]}        
                        > Home </NavLink>
                        <NavLink
                            to='/Services'
                            className={({ isActive }) => 
                            [
                                isActive? 'active-link':''
                            ]}
                        > Services </NavLink>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => 
                            [
                                isActive? 'active-link':''
                            ]}
                        > About </NavLink>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => 
                            [
                                isActive? 'active-link':''
                            ]}
                        > Contact </NavLink>
                    </div>
                </div>
                <div className='rightSide'>
                    <div id="google_translate_element" className="google-translate-container"></div>
                    <NavLink
                        to='/'
                        className={({ isActive }) => 
                    [
                        isActive? 'active-link':''
                    ]}
                    > Home </NavLink>
                    <NavLink
                        to='/Services'
                        className={({ isActive }) => 
                    [
                        isActive? 'active-link':''
                    ]}
                    > Services </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => 
                    [
                        isActive? 'active-link':''
                    ]}
                    > About us</NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => 
                    [
                        isActive? 'active-link':''
                    ]}
                    > Contact </NavLink>
                    <button onClick={toggleNavbar}>
                        <ReorderIcon />
                    </button>
                </div>
            </div>
        </Headroom>
    )
}

export default Navbar;