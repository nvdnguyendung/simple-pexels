import React from 'react';
import './onboardingFeature.scss';

function OnboardingFeature() {
  return (
    <div className="onboarding-feature">
      <div className="onboarding-feature__img">
        <img
          src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712"
          alt=""
        />
        <p className="onboarding-feature-text">
          I'm here to download free photos and videos.
        </p>
        <a href="" className="onboarding-feature__btn">
          I want to download
        </a>
      </div>
    </div>
  );
}

export default OnboardingFeature;
