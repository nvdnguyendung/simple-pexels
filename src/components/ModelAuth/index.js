import React from 'react';
import './modelAuth.scss';

function ModelAuth() {
  return (
    <div className="model-auth">
      <div className="model-auth__overlay">
        <div className="model-auth__main">
          <div className="model-auth__content">
            <header className="model-auth__header">
              <h1>Welcome Back To Pexels</h1>
            </header>
            <div className="model-auth__content">
              <button className="model-auth__btn model-auth__fb">
                <i class="fab fa-facebook-square"></i>
                Login with Facebook
              </button>
              <button className="model-auth__btn model-auth__apple">
                <i class="fab fa-apple"></i>
                Login with Apple
              </button>
              <p className="model-auth--or">OR</p>
              <input
                className="model-auth--input"
                type="text"
                placeholder="Password"
              />
              <input
                className="model-auth--input"
                type="text"
                placeholder="Email"
              />
              <button className="model-auth__btn model-auth__login">
                Login
              </button>
              <p className="model-auth--forgot">Forgot your password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelAuth;
