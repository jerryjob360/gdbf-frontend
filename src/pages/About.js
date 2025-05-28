import React, { useEffect, useState } from 'react'
import abtimg from '../assets/leaves Bg.jpeg'
import '../styles/About.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider';

function About() {
  
  const { currentUser, userToken, setcurrentUser, setuserToken } = useStateContext();


  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if(currentUser){
      setAdmin(true)
    }
  }, [])

  const nav = useNavigate();
  const logOut = () => {
    setcurrentUser(null);
    localStorage.clear();
    nav('/');
  };


  return (
    <div className='about'>
      <div className='adminLinks' id={admin? "show": "hide"}>
        <h3>Hi {currentUser}!</h3>
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>
      <div className='aboutTop'>
        <h1>About us</h1>
      </div>
      <div className='aboutBottom'>

        <h2 className='notranslate' translate='no'>Global Development</h2>
        <h2 className='lowh2' translate='no'>Friends & Builders</h2>
        <p>
        Global Development Friends And Builders (GDFB) is a Tanzanian Non
        Government organization located in Dodoma, Tanzania. GDFB is a fully fledged legally registered under 
        Non – Government Organization act of Tanzania of 2002, with registration number 00NGO/00009552 
        on 28th February 2018. GDFB was founded by Tanzanians professionals with a desire to 
        attain sustainable livelihood on the Environment, Health, Safety, Social and Economic development.
        </p>

        <div className='missionVision'>
          
          <p className='vision'>
            <h4>Vision</h4>
            To empower community on achieving sustainable livelihood through Environmental, Health, Safety, Social for 
            Economic development.
          </p>
          <p className='mission'>
            <h4>Mission</h4>
            To foster a resilient community by enhance capacity access to resources, Knowledge, that promote sustainable 
            livelihoods while prioritizing environmental stewardship, health and safety improvement, social equity, and 
            economic growth.
          </p>
        </div>


        <div className='buttons'>
          <Link to='/Services'>
            <button>See our Services</button>
          </Link>
          <Link to='/contact'>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About