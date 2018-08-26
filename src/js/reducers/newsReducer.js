'use strict'
let initialState = {
  category: 'general',
  categories: ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'],
  list: [],
  page: 1,
  maxPage: 20,
  status: 'loading'
};


const newsReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'FETCH_NEWS':
    state = {...state, news: action.news};
    break;
  case 'CHANGE_CATEGORY':
    state = {...state, category: action.category, page: 1, maxPage: 0};
    break;
  case 'SWITCH_PAGE':
    state = {...state, page: +action.page};
    break;
  case 'FETCH_NEWS_START':
    state = {...state, status: 'loading', list: []};
    break;
  case 'FETCH_NEWS_ERROR':
    state = {...state, status: 'error', list: [], page: 1, maxPage: 0};
    break;
  case 'FETCH_NEWS_SUCCESS':
    state = {...state, list: action.news, maxPage: action.maxPage, status: 'fetched'};
    break;
  }
  return state;
};

export default newsReducer;
