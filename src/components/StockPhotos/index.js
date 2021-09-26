import React from 'react';
import './stockPhotos.scss';

function StockPhotos(props) {
  const { images } = props || {};

  return (
    <div className="stock-photos grid wide">
      <div className="stock-photos__title-tabs">
        <h3 className="stock-photos--left">Free Stock Photos</h3>
        <ul className="stock-photos--right">
          <h4>
            Trending
            <i className=" fas fa-sort-down"></i>
          </h4>
          <ul className="stock-photos--sub-menu">
            <i className="stock-photos__icon-down fas fa-caret-up"></i>
            <li className="stock-photos--sub-item">Trending</li>
            <li className="stock-photos--sub-item">New</li>
          </ul>
        </ul>
      </div>
      <div className="stock-photos__img row">{mapImage(images)}</div>
    </div>
  );
}

function mapImage(images) {
  let result = null;
  if (images) {
    result = images.map((item, index) => {
      return (
        <div key={index} className="stock-photos__img-wrapper col l-4 m-6 c-12">
          <img src={item.src.portrait} alt={item.photographer} />
          <div className="stock-photos__info">{item.photographer}</div>
        </div>
      );
    });
  }
  return result;
}

export default StockPhotos;
