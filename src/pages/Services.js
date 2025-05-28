import React, { useEffect, useState } from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import contactImg from '../assets/new-message.jpg'
import BannerImage from '../assets/leaves mini.jpeg';
import { useStateContext } from '../contexts/contextProvider';
import phone_sign from "../assets/phone_bluey.jpg";

function Services() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k0icwql', 'template_7mzjf9n', form.current, 'UH5D5JkxBpExXi-ub')
      .then((result) => {
        console.log(result.text);
        alert('Success!')
      }, (error) => {
        console.log(error.text);
        alert('Failed. Check your internet connection and try again')
      });
    e.target.reset();
  };
  
    
  const { currentUser, userToken, setcurrentUser, setuserToken } = useStateContext();


  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setAdmin(true) 
    }
  }, [])
  console.log(admin);

  const nav = useNavigate();
  const logOut = () => {
    setcurrentUser(null);
    localStorage.clear();
    nav('/');
  };



  return (
    <div className='menu'>
      
      <div className='adminLinks' id={admin? "show": "hide"}>
        <h3>Hi {currentUser}!</h3>
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>
      {/* <div className='links'>
        <Link className='lnk' to={'/'}>
          HOME
        </Link>
        <Link className='lnk' to={'/contact'}>
          CONTACT US
        </Link>
        <h1 className='menuTitle'>What we do</h1>
      </div> */}

      <div className='mid'>
        <div className='serviceText'>
          <h1>What we do</h1>
          <p>We work collaboratively with local, regional, national and international community companies and 
              authorities aim at emphasizes the importance of integrating environmental health with social and 
              economic factors to create resilient communities capable of adapting to changes and sustainable 
              challenges, Through ensure  grassroots community’s members have access to information, knowledge 
              and resources timely for use in their development processes similarly implementing various 
              community and development projects in different regions of Tanzania.
            </p>
          {/* <p>
            We believe and invest in various projects that are helpful economically and environmentally.
          </p> */}
        </div>

        <div className='menuList'>
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                description={menuItem.description}
              />
            );
          })}

        </div>

        <div className='contactUs'>
          <form ref={form} onSubmit={sendEmail}
            className='contactForm'>
            <h2>Leave us a message</h2>
            <input
              name='user_name'
              placeholder='Enter your name here' required />
            <input
              name='user_email'
              placeholder='Enter your email address here' required />

            <textarea
              name='message'
              placeholder='Enter your message'
              required></textarea>
            <button type='submit' className='btn btn-lg'>Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Services;