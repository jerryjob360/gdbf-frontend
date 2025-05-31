import React, { useState, useEffect } from 'react';
import logoBg from '../assets/gdfb_logo-nobg.png';
import logoSm from '../assets/logo_small.png';
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



    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(()=> {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        handleResize();     //Ooptional

        window.addEventListener('resizze', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        
    }, []);



    return (
        <Headroom>
            <div className='navbar'>
                <div className='leftSide' id={openLinks ? "open" : "close"} >
                    <img src={isMobile ? logoSm : logoBg} alt="Company Logo" className='logoImg'/>
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