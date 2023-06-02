import React from 'react'


const Register = () => {



  return (

    <div>
    <div><h1 className='m-3'>Register</h1>
 
        <form className='m-5 '>
          <div class="form-outline mb-4">
            <input type="text" id="registerName" class="form-control " />
            <label class="form-label" htmlFor="registerName">
              Name
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="registerUsername" class="form-control" />
            <label class="form-label" htmlFor="registerUsername">
              Username
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" htmlFor="registerEmail">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="registerPassword"
              class="form-control"
            />
            <label class="form-label" htmlFor="registerPassword">
              Password
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="registerRepeatPassword"
              class="form-control"
            />
            <label class="form-label" htmlFor="registerRepeatPassword">
              Repeat password
            </label>
          </div>

        

          <button type="submit" class="btn btn-primary btn-block mb-3">
            Register
          </button>
        </form>
      </div>
    </div>
  
  
    )
}

export default Register