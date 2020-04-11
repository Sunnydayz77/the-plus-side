import React from 'react';

// This component handles our sign up form
export default function SignUp(props) {

  return (
    <div>
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={props.handleSignUp} >
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
