import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// root reducer
const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
