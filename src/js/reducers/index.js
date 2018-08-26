'use strict'
import { combineReducers } from 'redux';

import newsReducer from './newsReducer';

let reducer = combineReducers({
  news: newsReducer
});

export default reducer;
