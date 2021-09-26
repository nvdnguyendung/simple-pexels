import { IMAGE_SEARCH } from './constants';

export const initialState = {
  search: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_SEARCH:
      return {
        ...state,
        search: action.value,
      };

    default:
      return state;
  }
};

export default searchReducer;
