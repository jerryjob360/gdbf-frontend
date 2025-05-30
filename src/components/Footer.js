import React, { useEffect, useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import AllPosts from '../pages/AllPosts';
import About from '../pages/About';

function Footer() {

  const [listOfActivities, setListOfActivities] = useState([]);

  useEffect(() => {
    api.get(`/activity`).then((response) => {
      setListOfActivities(response.data);
    });
  }, []);

  const formattedDate = (date) => {
    const date1 = new Date(date).toDateString();
    return date1;
  }

  return (
    <div className='footer'>

      <div className='footContent'>

        <div className='abtUS'>
          <h2>WHO WE ARE</h2>
          <p>Global Development Friends And Builders (GDFB) is a Tanzanian Non-Government organization located in Dodoma, Tanzania. Registered on the 28th, February 2018, GDFB is aimed at achieving a sustainable livelihood on the environment, health, safety, social and economic development. <Link to='/About'>Read more about us</Link></p>
        </div>
        <div className='events'>
          <h2>RECENT EVENTS</h2>
          {listOfActivities.slice(-2).map((value, key) => {

            const date = value.createdAt;

            const dt = formattedDate(date);
            return <div className='evnt'>
              <p>{value.title}</p><br />
              <p>{dt}</p>
              
            </div>
          })
          }
          <Link to='/Allposts'>View All</Link>
        </div>
        {/* <div className=''>
            
          </div> */}
        <div className='socialMedia'>
          <h2>CONTACT US</h2>
          <div className='socialLinks'>
            <a href='https://www.gdbf.or.tz'><InstagramIcon /></a>

            <a href='https://www.gdbf.or.tz'><FacebookIcon /></a>

            <TwitterIcon />
            <Link to='/contact'><EmailIcon /></Link>
          </div>

        </div>

      </div>
          <Link to='/Login' className='copy'><p>&copy; 2021 GDFB  All Rights Reserved</p></Link>
    </div>
  )
}

export default Footer