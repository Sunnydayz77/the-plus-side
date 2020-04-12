import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const SignIn = (props) => {

  return (
    <div>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleSignIn();
      }} >
        <label>Email:
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        </label><br/>

        <label>Password: (Must be atleast 6 characters!)
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        </label><br/>

        <button>Sign In</button> <br />
        
        <p>Don't have an account? Sign up here!</p><Link to="/sign_up">Sign Up</Link>
      </form>
    </div>
  );
}

export default SignIn;