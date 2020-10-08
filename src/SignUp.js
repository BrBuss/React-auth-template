import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmpwd] = useState("");
  const [error, setError] = useState("");
  const [formAnimation, setFormAnimation] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email === "" || password === "" || confirmPwd === "") {
      setError("* Please fill in the form");
      setFormAnimation("validation-error");
    } else if (password !== confirmPwd) {
      setError("* Passwords must be the same");
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
    <div className="signup">
      <header className="signIn__header">
        <div className="title">
          <h1>SignUp Page</h1>
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
                <label htmlFor="signup-password">Password</label>
              </div>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="signup-password"
              />
            </div>
            <div className="input-block">
              <div className="input-label">
                <label htmlFor="confirm-password">Confirm Password</label>
              </div>
              <input
                value={confirmPwd}
                onChange={(event) => setConfirmpwd(event.target.value)}
                type="password"
                id="confirm-password"
              />
            </div>
            {error && (
              <div className="submit-error">
                <span>{error}</span>
              </div>
            )}
            <button type="submit" className="btn-login">
              Create Account
            </button>

            <div className="signin-linkContainer">
              <div className="divider"></div>
              <span>Already have Account? </span>
              <Link className="signin-link" to="/">
                <span>Sign-in</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
