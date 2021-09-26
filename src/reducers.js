import { combineReducers } from 'redux';
import homeReducer from './containers/HomePage/reducer';
import searchReducer from './containers/App/reducer';

export default function createReducer() {
  const rootReducer = combineReducers({
    homeReducer,
    searchReducer,
  });
  return rootReducer;
}
