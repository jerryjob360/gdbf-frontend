import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function Register() {
    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (data) => {
        axios.post(`${process.env.REACT_APP_API_URL}/auth/`, data).then(() => {
            console.log(data);
        });
    };

  return (
    <div>
        <Formik>
            <Form className='formContainer'>
                <Field 
                    id="inputCreateAdmin"
                    name="username"
                    placeholder="Admin username..."
                />
                <Field 
                    id="inputCreateAdmin"
                    name="password"
                    type="password"
                    placeholder="password..."
                />
                <Field
                    id="inputCreateAdmin"
                    name="passwordRepeat"
                    type="password"
                    placeholder="Re-type password"
                />

                <button type="submit">Register Admin</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register;