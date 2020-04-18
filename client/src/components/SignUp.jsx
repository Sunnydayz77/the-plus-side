import React from 'react';
import { Link } from 'react-router-dom';

// This component handles our sign up form
export default function SignUp(props) {

  return (
    <div className="signUp">
      <h2>Sign Up</h2>

      <h3>Sign up to create your own positivity blog and to see good news articles populating the internet!</h3>
      <br/>
      <form onSubmit={props.handleSignUp} >
        <label>Email:
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        </label><br/>

        <label>Password: 
          {/* (Must be atleast 6 characters!) */}
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        </label><br />
        
        <button>Sign Up</button>

        <p>Already have an account? Sign in here!&nbsp;<Link to="/sign_in">Sign In</Link></p>

      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
