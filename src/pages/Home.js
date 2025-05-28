import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Services from './Services';
import BannerImage from '../assets/leaves Bg.jpeg';
import '../styles/Home.css'
import { useStateContext } from '../contexts/contextProvider';


function Home() {

  const { currentUser, userToken, setcurrentUser, setuserToken } = useStateContext();

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setAdmin(true) 
    }
  }, []);
  console.log(admin);

  const nav = useNavigate();
  const logOut = () => {
    setcurrentUser(null);
    localStorage.clear();
    setAdmin(false);
  };


  // useEffect(() => {
  //   if (!currentUser) {
  //     nav('/');
  //   }
  // }, )

  return (
    <div className='all'>
      <div className='adminLinks'id={admin? "show": "hide"}>
        <h3>Hi {currentUser}!</h3>
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>
      <div className='home'>
      
      <div className="headerContainer" >
        <div className='header'>
          <h1>Global Development Friends Builders</h1>
        </div>
        <div className='headerCont'>
          <p>Welcome to Global Development Friends and Builders (GDFB), a Tanzanian NGO dedicated to transforming lives in Dodoma and beyond. Since 2018, we’ve empowered communities with sustainable solutions in environmental stewardship, health, safety, and economic growth. From HIV/AIDS awareness to climate resilience, our work fosters thriving, resilient communities. Join us in building a brighter, sustainable future—contact us today to get involved!</p>
          <Link to='/Services'>
            <button>Our Services</button>
          </Link>
          
        </div>

      </div>
    </div>
    </div>
    
  )
}

export default Home