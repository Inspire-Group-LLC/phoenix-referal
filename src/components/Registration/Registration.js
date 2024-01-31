import React from "react";
import "./Registration.scss";
import FormRegistration from "./FormRegistration.js";
import logo from '../../images/logo.svg';

function Registration() {
  return (
    <div className='registrationPage'>
      <img src={logo} className='logoRegistration' alt='logo' />
      <FormRegistration />
    </div>
  );
}

export default Registration;
