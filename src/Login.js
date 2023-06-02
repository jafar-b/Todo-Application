import React from "react";

import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("email = " + email);
    alert("Password = " + password);
  };

  return (
    <>
      <div>
        <h1>Login </h1>
        <form className=" m-5">
          <div class="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Signin
          </button>
          <p className="mt-2">
            Not a Member?
            <a className="text-primary" href="/Register">
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
