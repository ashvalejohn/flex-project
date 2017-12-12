import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render(){
    return (
      <div className='auth'>
        <h1 className='auth__title'>Sign Up</h1>
        <form action="" className='auth__form'>
          <label htmlFor="" className='auth__form-field'>Email Address
            <input type="email" />
          </label>
          <label htmlFor="" className='auth__form-field'>Password
            <input type="password" />
          </label>
        </form>
        <div className='auth__login-signup'>
          <button className='auth__submit'>Sign Up</button>
          <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </div>
      </div>
    )
  }
}

export default Signup;