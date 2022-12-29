import { Form,Input } from "antd";
import {Link} from "react-router-dom"
import React from 'react';
import '../pages/styles/Homepage.css'
import "../styles/LogInStyle.css";
const HomePage = () => {
  const onFinishHandler = (values) => {
  console.log(values);
  }
  return (
    <>
    
  <div className='form-container'>

<Form layout='vertical' onFinish={onFinishHandler} className="card p-4 login-form" >    
<div className="login-form-container1"><h1>
      Event Dashboard
    </h1></div>
    <div className="login-form-container2">
    <p className='username'>
    Username:
    </p>
<Form.Item  name="email" required >
<Input type='text'placeholder='sntc@iitbhu' />
</Form.Item>
  <p className='credential'>
Password:
</p>
<Form.Item  name="password" required>
  <Input type='text' placeholder='SNTC IITBHU' />
</Form.Item>
<Link to="/register" className='ms-2'>Don't have an account?
</Link>
<button className='btn btn-primary' type='submit'>Log In</button>
</div>

</Form>
</div>
    {/* <p className='eventdashboard'>
      Event Dashboard
    </p>
    <div className='container1'>
    <p className='username'>
    Username:
    </p>
    <input type={'email'} className='email' placeholder='sntc@iitbhu' />
    <p className='credential'>
Password:
</p>
<input type={'password'} className='password' placeholder='SNTC IITBHU' />
<button className='loginbutton'>
    Log In
</button> 
    </div>*/}
    </>
  )
}

export default HomePage
