import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import {delay} from 'redux-saga';
import * as actions from './actions';
import {put, call, takeEvery, fork, take} from 'redux-saga/effects';

const bookURL = 'https://api.myjson.com/bins/1fr4t5';

function fetchRankApi(url) {
  return fetch(url).then(res => res.json()).then(json => json)
}

export function* watchIncrementAsync(dispatch) {
  const param = yield call(() => fetchRankApi(bookURL))
  yield put(actions.initFetch(param))
}
