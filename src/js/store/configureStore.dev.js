import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import { watchIncrementAsync } from '../saga';
import { createLogger } from 'redux-logger';
import { AUTH_REMOVE_TOKEN, AUTH_SET_INFO, AUTH_SET_TOKEN } from 'constants/actionType';

const logger = createLogger({
  predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN,
  level: {
    prevState: () => `info`,
    action: ({ type }) => type === AUTH_SET_INFO ? `error` : `log`,
    error: () => `error`,
    nextState: () => `info`,
  },
  duration: true,
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  }),
  colors: {
    prevState: () => `#FFEB3B`,
    action: ({ type }) => type === AUTH_SET_INFO && `red`,
    nextState: () => `#4CAF50`,
  },
  diff: true,
  diffPredicate: (getState, action) => action.type === AUTH_SET_TOKEN,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    logger,
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(watchIncrementAsync)
  }
}
