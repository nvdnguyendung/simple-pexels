import React, { useState } from 'react';
import './header.scss';

function Header(props) {
  const { imageSearch } = props;

  const [search, setSearch] = useState('');
  const onSubmitSearch = (e) => {
    e.preventDefault();
    imageSearch(search);
    setSearch('');
  };
  return (
    <div className="header">
      <header className="header__main">
        <input
          className="header__show-bars"
          type="checkbox"
          id="show-menu-bars"
          hidden
        />
        <div className="header__logo">
          <img
            className="header__img"
            src="https://www.drupal.org/files/project-images/pexels_logo_0.png"
            alt="Pexels"
          />
          <span className="header__logo-text">Pexels</span>
        </div>

        <form
          onSubmit={onSubmitSearch}
          className="header__box-search"
          action="#"
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="header__input-search"
            type="text"
            placeholder="Search for free photos"
            required
          />
          <button type="submit" className="header__btn-search">
            <i class="fas fa-search"></i>
          </button>
        </form>

        <label htmlFor="show-menu-bars" className="header__btn-bars">
          <i className="header__icon-bars fas fa-bars"></i>
        </label>

        <div className="header__nav">
          <ul className="header__menu">
            <li className="header__item">
              <a href="#" className="header__link">
                Explore
              </a>

              <div className="header__sub">
                <i className="header__icon-up fas fa-sort-up"></i>
                <div className="header__sub-menu">
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Discover Photo
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Popular Searches
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Leaderboard
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Challenges
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Free Videos
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Pexels Blog
                    </a>
                  </li>
                </div>
              </div>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                License
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Upload
              </a>
            </li>
            <li className="header__item">
              <i className="header__more fas fa-ellipsis-h"></i>
              <div className="header__sub header__sub-more">
                <i className="header__icon-up header__icon-up-more fas fa-sort-up"></i>
                <div className="header__sub-menu header__sub-more--menu">
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Login
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Join
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Changer Language
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Image & Video API
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      App & Plugins
                    </a>
                  </li>
                  <li className="header__sub-item">
                    <a href="" className="header__sub-link">
                      Pexels Blog
                    </a>
                  </li>
                  <li className="header__sub-contact">
                    <a href="#" className="header__sub-contact--link">
                      <i class="header__sub-contact-icon fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="header__sub-contact--link">
                      <i class="header__sub-contact-icon fab fa-twitter"></i>
                    </a>
                    <a href="#" className="header__sub-contact--link">
                      <i class="header__sub-contact-icon fab fa-instagram"></i>
                    </a>
                    <a href="#" className="header__sub-contact--link">
                      <i class="header__sub-contact-icon fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" className="header__sub-contact--link">
                      <i class="header__sub-contact-icon fab fa-youtube"></i>
                    </a>
                  </li>
                </div>
              </div>
            </li>
            <li className="header__item">
              <a href="#" className="header__link header__join">
                Join
              </a>
            </li>
          </ul>

          <ul className="header__menu-mobile">
            <li className="header__item">
              <a
                href="#"
                className="header__link header__line-bottom header__line-top"
              >
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Discover Photos
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link header__line-bottom">
                Popular Searches
              </a>
            </li>

            <li className="header__item">
              <a href="#" className="header__link ">
                Challenges
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link ">
                Leaderboard
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link header__line-bottom">
                Pexels Blog
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Login
              </a>
            </li>
            <li className="header__sub-contact">
              <a href="#" className="header__sub-contact--link">
                <i class="header__sub-contact-icon fab fa-facebook-f"></i>
              </a>
              <a href="#" className="header__sub-contact--link">
                <i class="header__sub-contact-icon fab fa-twitter"></i>
              </a>
              <a href="#" className="header__sub-contact--link">
                <i class="header__sub-contact-icon fab fa-instagram"></i>
              </a>
              <a href="#" className="header__sub-contact--link">
                <i class="header__sub-contact-icon fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="header__sub-contact--link">
                <i class="header__sub-contact-icon fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
