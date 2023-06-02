import React from "react";

import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSignup, setIsSignup] = useState(false);


  const handleSubmit = (e) => {
   e.preventDefault();
    alert("email = " +password);
    alert("Password = " + email);
  };

  return (
    <>
      <div>
        <h1>Login </h1>
        <form className=" m-5" onSubmit={handleSubmit}>
          <div class="form-group ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>

          <button type="submit" class="btn btn-primary" >
            Signin
          </button>
          <p className="mt-2">
            Not a Member?
            <a className="text-white rounded p-2 bg-primary" href="/Register">
              {" "}
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
