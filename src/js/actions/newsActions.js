import axios from 'axios';

const API_KEY = '3b0f6e1db14b44ec867ced2b5e70c3d4';
const PAGE_SIZE = 10;
const COUNTRY = 'us';

export function fetchNewsStart() {
  return {
    type: 'FETCH_NEWS_START'
  }
}

export function fetchNewsSuccess(news, maxPage) {
  return {
    type: "FETCH_NEWS_SUCCESS",
    news,
    maxPage
  }
}

export function fetchNewsError() {
  return {
    type: 'FETCH_NEWS_ERROR'
  }
}

export function fetchNews() {
  return (dispatch, getState) => {
    dispatch(fetchNewsStart());

    let { category, page } = getState().news;
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${category}&page=${page}&pageSize=${PAGE_SIZE}&country=${COUNTRY}`;
    
    axios.get(url)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .then((news) => {
      dispatch(fetchNewsSuccess(news.articles, Math.round(news.totalResults / PAGE_SIZE)));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchNewsError);
    })
  }
}

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category
  }
}

export function switchPage(page) {
  return {
    type: 'SWITCH_PAGE',
    page
  }
}
