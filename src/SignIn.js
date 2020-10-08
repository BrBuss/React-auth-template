import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [formAnimation, setFormAnimation] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      setError(true);
      setFormAnimation("validation-error");
    } else {
      setFormAnimation("form-hide");
    }
  };
  const handleAnimation = () => {
    if (formAnimation === "form-hide") {
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
      setFormAnimation("");
    }
  };
  return (
    <div className="signIn">
      <header className="signIn__header">
        <div className="title">
          <h1>SignIn Page</h1>
        </div>
      </header>
      <section className="form-section">
        <div className="form-wrapper">
          <form
            style={{ display: submitSuccess && "none" }}
            onAnimationEnd={handleAnimation}
            className={formAnimation}
            onSubmit={handleSubmit}
          >
            <div className="input-block">
              <div className="input-label">
                <label htmlFor="login-email">Email</label>
              </div>

              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                id="login-email"
              />
            </div>
            <div className="input-block">
              <div className="input-label">
                <label htmlFor="login-password">Password</label>
              </div>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="login-password"
              />
            </div>
            {error && (
              <div className="submit-error">
                <span>* Please fill in the form</span>
              </div>
            )}
            <button type="submit" className="btn-login">
              Login
            </button>

            <div className="signUp-linkContainer">
              <div className="divider"></div>
              <Link className="signup-link" to="signup">
                <span>Sign-up</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
