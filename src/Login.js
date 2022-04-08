import React, { useState } from "react";
import heroImage from "./hero.png";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  };

  return (
    <>
      <section className="loginsection section ">
        <div className="container grid grid-two-column">
          <div className="login-image">
            {/* <img src="/hero.png" alt="user loggin pic" /> */}
            {/* <img src={heroImage} className="hero-image" alt="user login " /> */}
          </div>
          {/* right side div  */}
          <div className="login-data">
            <img src={heroImage} className="logo-image" alt="logo" />
            <p className="bold-text">Welcome back!</p>
            {/* form start  */}
            <form action="#" className="login-form">
              <div className="form">
                <input
                  type="text"
                  id="email"
                  className="form__input"
                  placeholder=" "
                  name="username"
                  value={userLogin.username}
                  onChange={handleInput}
                />
                <label htmlFor="email" className="form__label">
                  Email or Phone
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="pasword"
                  className="form__input"
                  placeholder=" "
                  name="password"
                  value={userLogin.password}
                  onChange={handleInput}
                />
                <label htmlFor="pasword" className="form__label">
                  Password
                </label>
              </div>

              <div className="checkbox">
                <input type="checkbox" className="form-checkbox" />

                <p className="common-para">Remember me on this system</p>
              </div>

              <div className="forgotPassword">
                <a
                  className="common-para"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Forgot Password?
                </a>
              </div>

              <input type="submit" value="Login" className="btn" />
            </form>
            {/* extra way to login  */}
            <p className="common-para">
              or login with your social network account
            </p>
            <div className="social-btn login-btn">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-solid fa-m"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <p className="common-para">
              Don't have account yet? <a href="#"> Sign Up </a> here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
