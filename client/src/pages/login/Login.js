import { useContext, useRef } from "react";
import "./login.css";

import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">growr</h3>
          <span className="loginDesc">
            Connecting green thumbs in your community.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >

            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">

            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
