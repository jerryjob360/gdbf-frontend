import React, { useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import api from '../utils/axios';
import '../styles/activity.css';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextProvider';


function Activity() {

  const { currentUser, setcurrentUser } = useStateContext();

  const initialValues = {
    title: "",
    body: "",
    image: null
  };

  const initialValuesAd = {
    username: "",
    password: "",
  };



  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("image", data.image);
    // console.log(data);
    api.post(`/activity`, formData,
      {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((response) => {

        if (response.data.error) {
          alert(response.data.error);
        }
        else {
          console.log(response.data);
          alert('Activity added successfully');
        }
      });
  };

  const addAdmin = (data) => {
    console.log('attempting');
    console.log(data);
    api.post(`/auth`, data,
      {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        }
      }
    ).then((response) => {
      alert("Admin Registered Successfully!");
    });
  };

  const nav = useNavigate();
  const logOut = () => {
    setcurrentUser(null);
    localStorage.clear();
    nav('/');
  };

  useEffect(() => {
    if (!currentUser) {
      nav('/');
    }
  }, [currentUser, nav])

  // useEffect(() => {
  //   if(user_name){

  // }
  // }, [])



  return (
    <div className='activities'>
      <div className='adminLinks'>
        <h3>Hi {currentUser}!</h3>
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>
      <div className='bottom'>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ setFieldValue, handleBlur, handleChange }) => (
              <Form className='form'>
              <h2>Post a new Event here</h2>
              <Field
                id="inputAddActivity"
                name="title"
                placeholder="Event Title"
                required
              />
              <textarea
                name="body"
                placeholder='Enter event description here'
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                required
              />

              <input
                id='file'
                name='image'
                type='file'
                accept='image/*'
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />

              <button type='submit'>Post Event</button>
            </Form>
            )}
            
          </Formik>

          <Formik initialValues={initialValuesAd} onSubmit={addAdmin}>
            <Form className='form'>
              <h2>Register New Admin</h2>

              <Field
                id="inputCreateAdmin"
                name="username"
                placeholder="Admin username..."
              />
              <Field
                id="inputCreateAdminPass"
                name="password"
                type="password"
                placeholder="password..."
              />

              <button type='submit'>Register Admin</button>
            </Form>
          </Formik>
      </div>
    </div>
  )
}

export default Activity