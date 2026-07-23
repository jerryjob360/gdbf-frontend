import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Services from './Services';
import BannerImage from '../assets/frontpg.png';
import '../styles/Home.css'
import { useStateContext } from '../contexts/contextProvider';


function Home() {

  const { currentUser, setcurrentUser } = useStateContext();

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setAdmin(true) 
    }
  }, [currentUser]);
  console.log(admin);

  // const nav = useNavigate();
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
        <div className='homeTop'>
          <div className='homeText'>
            <h1>Welcome to GDFB</h1>
            <p>Empowering communities for a sustainable future.</p>
            {/* <Link to='/Services'>
              <button>Our Services</button>
            </Link> */}
          </div>
          {/* <div className='homeImage'> */}
            <img src={BannerImage} alt="Banner" />
          {/* </div> */}
        </div>
      
      {/* <div className="headerContainer" >
        <div className='header'>
          <h1>Global Development Friends Builders</h1>
        </div>
        <div className='headerCont'>
          <p>We create resilient communities that bridge Indigenous knowledge and scientific innovation to improve livelihoods and safeguard ecosystems</p>
          <Link to='/Services'>
            <button>Our Services</button>
          </Link>
          
        </div>

      </div> */}
    </div>
    </div>
    
  )
}

export default Home