import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
export default function SignIn (props) {

  return (
    <div>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleSignIn();}} >
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Sign In</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
}
