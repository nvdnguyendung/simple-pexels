import {
  FIND_ALL_IMAGE_ERROR,
  FIND_ALL_IMAGE_SUCCESS,
  IMAGE_LOADING,
} from './contants';
export const initialState = {
  loading: false,
  error: null,
  images: null,
  param: null,
  page: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_LOADING:
      return {
        ...state,
        loading: true,
        images: null,
        error: null,
      };
    case FIND_ALL_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.images.photos,
        error: null,
        page: action.images.page,
      };
    case FIND_ALL_IMAGE_ERROR:
      return { ...state, loading: false, images: null, error: action.error };

    default:
      return state;
  }
};

export default homeReducer;
