import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Activity from '../Activity';
import { useStateContext } from '../../contexts/contextProvider';
import '../../styles/login.css'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const { currentUser, setcurrentUser, setuserToken } = useStateContext();

  const nav = useNavigate();
  useEffect(() => {
    if (currentUser) {
      console.log("Current User is:")
      console.log(currentUser)
      nav('/activities');
    }
  }, [currentUser, nav]); 

  const login = () => {
    const credentials = {
      username: username,
      password: password
    };
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, credentials).then((response) => {

      if (response.data.error) {
        alert(response.data.error);
      }
      else {
        // localStorage.setItem('accessToken', response);
        setcurrentUser(response.data.username);
        setuserToken(response.data.accessToken);
        nav('/activities');
      }
    });
  };

  // {isLoggedIn ? <Navigate to={'/activities'} />: null}




  return (
    <div className='loginPg'>
      <div className='loginForm'>
        <h2>Login Here</h2>
        <input type='text'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login