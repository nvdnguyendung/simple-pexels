import React from 'react';
import { connect } from 'react-redux';
import { imageSearch } from '../App/actions';
import Header from '../../components/Header';

function HeaderContainer(props) {
  const { onSearchImage } = props;

  const imageSearch = (search) => {
    onSearchImage(search);
  };
  return (
    <>
      <Header imageSearch={imageSearch} />
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

export default connect(null, mapDispatchToProps)(HeaderContainer);
