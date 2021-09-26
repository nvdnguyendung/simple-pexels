import imageApi from '../../api/imageApi';
import {
  IMAGE_LOADING,
  FIND_ALL_IMAGE_SUCCESS,
  FIND_ALL_IMAGE_ERROR,
  IMAGE_SEARCH,
} from './contants';

export function findAllImageRequest(paramString) {
  return (dispatch) => {
    dispatch(imageLoading());
    return imageApi
      .findAllImage(paramString)
      .then((res) => dispatch(findAllImageSuccess(res)))
      .catch((error) => dispatch(findAllImageError(error)));
  };
}

export function imageLoading() {
  return {
    type: IMAGE_LOADING,
  };
}

export function findAllImageSuccess(images) {
  return {
    type: FIND_ALL_IMAGE_SUCCESS,
    images,
  };
}

export function findAllImageError(error) {
  return {
    type: FIND_ALL_IMAGE_ERROR,
    error,
  };
}

export function imageSearch(value) {
  return {
    type: IMAGE_SEARCH,
    value,
  };
}
