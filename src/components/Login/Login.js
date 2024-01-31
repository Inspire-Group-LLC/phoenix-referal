import React from 'react';
import './Login.scss';
import FormLogin from "./FormLogin.js";
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className='loginPage'>
      <img src={logo}  className='logoLogin' alt='logo' />
      <FormLogin />
    </div>
  );
}

export default Login;