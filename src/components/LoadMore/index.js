import React, { useState } from 'react';
import './loadMore.scss';

function LoadMore(props) {
  const { onCountPage, page } = props;

  const onPage = (page) => {
    onCountPage(page);
  };

  return (
    <div className="load-more">
      <button></button>

      <button
        onClick={() => onPage(page - 1)}
        disabled={page <= 1}
        className="load-more__textPre"
      >
        Pre
      </button>

      <button
        onClick={() => onPage(page + 1)}
        disabled={page >= 10}
        className="load-more__textNext"
      >
        Next
      </button>
    </div>
  );
}

export default LoadMore;
