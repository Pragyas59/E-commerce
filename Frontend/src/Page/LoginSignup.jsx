import React from 'react';
import './CSS/LoginSignup.css'

 const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password'/>
          <input type="confirm-password" placeholder='Confirm Password' />

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already Have an account ? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup;
