import React from 'react'
import { useState, useEffect } from 'react';
import './LoginForm.css'
import Header from './Header';


const LoginForm = () => {


    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            handleLogin(formValues);
        }
    }, [formErrors]);


    const handleLogin = (data) => {
        //if verified route to ../Appmain.js
    }


    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = "Username is required!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    };



    return (

        <>
            <Header />
            <div className="events-dashboard"><h1>Events Dashboard</h1></div>
            <div className="login-form">


                <form className="group-form" onSubmit={handleSubmit}>


                    <div className='rectangle-div'>
                        <div className='field'>
                            <label className='userName-label'>Username</label>
                            <p>
                                <input className="rectangle-input" type="text" name="username" placeholder='Username' value={formValues.username} onChange={handleChange} />
                            </p>
                            <p className="errors">{formErrors.username}</p>
                        </div>

                        <div className='field'>
                            <label className='password-label'>Password</label>
                            <p>
                                <input className="rectangle-input1" type="password" id='password' name="password" placeholder='Password' value={formValues.password} onChange={handleChange} />
                                <span>
                                <i class="fa-solid fa-eye-slash" id='eye' aria-hidden='true'></i>
                                </span>
                            </p>
                            <p className="errors">{formErrors.password}</p>
                        </div>
                        {/* <script>
                            document.getElementById("eye").addEventListener("click",function(){
                                if(document.getElementById("password").type=="password"){
                                    document.getElementById("password").type="text";
                                }
                                else{
                                    document.getElementById("password").type="password";
                                }
                            });
                        </script> */}
                        <div className='login-button'>
                            <button className='login' type='submit'>Login</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginForm