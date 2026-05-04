import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="top-head">
        <div className="top-head-container w-100 d-flex align-items-center justify-content-between px-4">
          <button className="top-brand-button">Try Dropbox Business</button>
          <img src="/img/Dropbox_logo_2017.svg" alt="Dropbox" style={{ height: 28 }} />
          <div style={{ width: 164 }} />
        </div>
      </header>

      {/* Main */}
      <section className="banner-section">
        <div className="banner-content">
          {/* Left: hero image */}
          <div className="left d-flex align-items-center justify-content-center">
            <img src="/img/herobanner.svg" alt="hero" className="banner-image" />
          </div>

          {/* Right: auth form */}
          <div className="right">
            {/* Toggle header */}
            <div className="top-header mb-3">
              <span className="signin">{showCreate ? "Create an account" : "Sign In"}</span>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowCreate(!showCreate); }}
              >
                {showCreate ? "Log in" : "Create an account"}
              </a>
            </div>

            {!showCreate ? (
              /* ── Sign In ── */
              <div id="div1">
                <button className="btn btn-primary btn-block signin-google-btn">
                  Sign in with Google
                </button>
                <button className="btn btn-dark btn-block signin-apple-btn">
                  Sign in with Apple
                </button>

                <div className="hr-label">
                  <span className="hr-label__text px-2">or</span>
                </div>

                <div className="username">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Password"
                  />
                </div>

                <div className="signin-remember d-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <button className="btn btn-primary btn-sm rounded-0 signinbtn">
                    Sign In
                  </button>
                </div>

                <div className="forgotpass mt-2">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            ) : (
              /* ── Create Account ── */
              <div id="div2" style={{ display: "block" }}>
                <div className="username">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="First Name"
                  />
                </div>
                <div className="username">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Last Name"
                  />
                </div>
                <div className="username">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Password"
                  />
                </div>

                <div className="signin-remember">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeTerms"
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      I agree to the Dropbox{" "}
                      <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a>.
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary btn-block rounded-0 signinbtn mt-3">
                  Create an account
                </button>
              </div>
            )}

            <div className="mt-3">
              <Link to="/dashboard" style={{ fontSize: 13, color: "#767676" }}>
                Go to Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
