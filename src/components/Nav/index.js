import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__main">
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#" className="nav__link nav__active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Discover
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Videos
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Leaderboard
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Challenges
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
