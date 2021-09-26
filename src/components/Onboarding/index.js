import React from 'react';
import './onboarding.scss';

function Onboarding() {
  return (
    <div className="onboarding">
      <div className="onboarding__onboarding">
        <div className="onboarding__logo">
          <img
            className="onboarding__img"
            src="https://www.drupal.org/files/project-images/pexels_logo_0.png"
            alt="Pexels"
          />
          <span className="onboarding__logo-text">Pexels</span>
        </div>
        <div className="onboarding__account">
          <span className="onboarding__account--text">Have an account?</span>
          <a href="#" className="onboarding__account--link">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
