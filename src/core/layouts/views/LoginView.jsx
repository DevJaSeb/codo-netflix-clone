import React from "react";
import { useAuth } from "../../auth/hook/useAuth";
import "../../styles/login.css";

const LoginView = () => {
  const { login } = useAuth();
  return (
    <>
      <article className="login">
        <section className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <label className="label-login" htmlFor="username">
              <input
                className="username"
                type="text"
                name="username"
                id="username"
                placeholder="Email or phone number"
              />
            </label>
            <label className="label-login" htmlFor="password">
              <input
                className="password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <button className="login-button" onClick={login}>
              Login
            </button>
            <div className="login-remember">
              <div className="login-rememer-container">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#">Need Help?</a>
            </div>
          </form>
          <p className="login-footer">
            New to Cineverse? <a href="#">Create an account</a>
          </p>
          <p className="login-footer-2">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
            <a href="#">Learn More</a>
          </p>
        </section>
      </article>
    </>
  );
};

export default LoginView;
