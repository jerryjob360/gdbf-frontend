import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bg from '../assets/contact bg.jpeg'
import '../styles/contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextProvider';

function Contact() {

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


  const [ admin, setAdmin ] = useState(false);
  useEffect(() => {
    if
    (currentUser){
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
    <div className='all'>
      <div className='adminLinks' id={admin? "show": "hide"}>
        <h3>Hi {currentUser}!</h3>
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>
      
    <div className='contact'>
      
      <div className='text'>

        <h1 className='int'> Interested in<br /> our services?</h1>
      </div>

      <div className='formContainer'>
        <form ref={form} onSubmit={sendEmail}
          className='form'>
          <h3>Leave us a<br />Message here...</h3>
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

      <div className='social'>
        <h2>Or connect with us<br />on social networks.. </h2>
        <p>
          <a href='https://www.instagram.com/sbec_limited/'><InstagramIcon />Instagram</a>
        </p>
        <p>
          <a href='https://www.facebook.com/profile.php?id=61550835304194'><FacebookIcon />Facebook</a>
        </p>
      </div>

    </div>
      
    </div>
  )
}

export default Contact