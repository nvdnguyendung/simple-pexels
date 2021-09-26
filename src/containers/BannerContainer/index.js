import React from 'react';
import { connect } from 'react-redux';
import { imageSearch } from '../App/actions';
import Banner from '../../components/Banner';

function BannerContainer(props) {
  const { onSearchImage } = props;

  const imageSearch = (search) => {
    onSearchImage(search);
  };
  return (
    <>
      <Banner imageSearch={imageSearch} />
    </>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchImage: (value) => {
      dispatch(imageSearch(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(BannerContainer);
