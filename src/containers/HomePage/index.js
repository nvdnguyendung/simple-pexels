import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import LoadMore from '../../components/LoadMore';
import Nav from '../../components/Nav';
import StockPhotos from '../../components/StockPhotos';
import BannerContainer from '../BannerContainer';
import { findAllImageRequest } from './actions';

function HomePage(props) {
  const { findAllImage, searchImageValue } = props;
  const { images, loading, error, page } = props.fetchImages || {};
  var searchValue = searchImageValue?.search;
  const [filter, setFilter] = useState({
    params: {
      query: '',
      page: 1,
      per_page: 12,
    },
    toggle: 'curated',
  });

  useEffect(() => {
    if (typeof searchValue === 'string') {
      let onFilter = { ...filter };
      onFilter.params.query = searchValue;
      onFilter.toggle = 'search';
      setFilter({ ...onFilter });
    }
  }, [searchValue]);

  useEffect(() => {
    const paramString = queryString.stringify(filter.params);
    const newFilter = { ...filter, params: paramString };
    findAllImage(newFilter);
  }, [filter]);

  const onCountPage = (page) => {
    let newFilter = { ...filter };
    newFilter.params.page = page;
    const paramString = queryString.stringify(newFilter.params);
    newFilter = { ...newFilter, params: paramString };
    findAllImage(newFilter);
  };

  return (
    <>
      <BannerContainer />
      <Nav />
      {loading && <Loading />}
      {images && <StockPhotos images={images} />}
      <LoadMore page={page} onCountPage={onCountPage} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    fetchImages: state.homeReducer,
    searchImageValue: state.searchReducer,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    findAllImage: (paramString) => {
      dispatch(findAllImageRequest(paramString));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
