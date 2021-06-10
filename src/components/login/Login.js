
import React from "react";
import style from "./Login.module.scss"
import axios from "axios"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };


  submitCredentials = () => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };


    axios
      .post(`https://budgetapp.digitalcube.rs/api/tenants/77bd5a17-d27d-45b3-88fe-4cd8384a297e/sessions?`, payload
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "token",
          (response.data.token)
        );
        this.props.history.push("/wallet");
      })
      .catch((error) => alert("Invalid email or password"));
    console.log(localStorage);
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <svg width="161" height="182" viewBox="0 0 161 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M76.7365 0L0 50.8542V50.9499L59.3378 90.2529L76.7365 78.7015V0Z" fill="#7FC481" fill-opacity="0.42" />
              <path opacity="0.8" d="M0 129.7L76.7365 180.505V101.804L59.3378 90.2529L0 129.556V129.7Z" fill="#7FC481" fill-opacity="0.42" />
              <path opacity="0.8" d="M160.998 52.1012L84.262 1.24707V79.9486L101.709 91.4998L160.998 52.197V52.1012Z" fill="#7FC481" fill-opacity="0.42" />
              <path opacity="0.8" d="M84.262 181.753L160.998 130.898V130.802L101.709 91.4989L84.262 103.05V181.753Z" fill="#7FC481" fill-opacity="0.42" />
              <path opacity="0.8" d="M0 50.95V129.556L59.3378 90.2527L0 50.95Z" fill="#5E9C60" />
              <path opacity="0.8" d="M161 130.803V52.1968L101.709 91.4998L161 130.803Z" fill="#5E9C60" />
            </svg>
          </div>
          <div>
            <h4>Welcome to Budget App</h4>
            <h5>Fill in the fields to continue</h5>
          </div>
        </div>
        <div>
          <div>
            <label className={`${style.label} col-lg-12`}></label>
            <input
              className={`${style.input} col-lg-12`}
              onChange={this.setUsername}
              type="email"
              placeholder="username"
            />
          </div>
          <div>
            <label className={`${style.label} col-lg-12`}>Password*</label>
            <input
              className={`${style.input} col-lg-12`}
              onChange={this.setPassword}
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <a href=""> <h5>Forgot password?</h5></a>
          </div>
        </div>
        <div>
          <button className={style.button} onClick={this.submitCredentials}>
            Login
            </button>
        </div>
        <div>
          <h6>Don't have an account? Register</h6>
        </div>
      </div>
    );
  }
}
export default Login;