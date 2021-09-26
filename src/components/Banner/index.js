import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './banner.scss';

function Banner(props) {
  const { imageSearch } = props;

  const [search, setSearch] = useState('');
  const onSubmitSearch = (e) => {
    e.preventDefault();
    imageSearch(search);
    setSearch('');
  };

  const onSearchLink = (value) => {
    imageSearch(value);
  };

  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__main">
          <h1 className="banner__title">
            The best free stock photos & videos shared by talented creators.
          </h1>

          <form
            onSubmit={onSubmitSearch}
            className="banner__box-search"
            action="#"
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="banner__input-search"
              type="text"
              placeholder="Search for free photos"
              required
            />
            <button type="submit" className="banner__btn-search">
              <i class="fas fa-search"></i>
            </button>
          </form>

          <ul className="banner__tag">
            <li className="banner__label">Suggested:&nbsp;</li>
            <Link
              to="#"
              onClick={() => onSearchLink('hand')}
              className="banner__link"
            >
              hand,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('outdoors')}
              className="banner__link"
            >
              outdoors,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('canada')}
              className="banner__link"
            >
              canada,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('happy')}
              className="banner__link"
            >
              happy,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('family')}
              className="banner__link"
            >
              family,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('boat')}
              href="#"
              className="banner__link"
            >
              boat,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('muslim')}
              href="#"
              className="banner__link"
            >
              muslim,&nbsp;
            </Link>
            <Link
              to="#"
              onClick={() => onSearchLink('more')}
              href="#"
              className="banner__link"
            >
              more
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
