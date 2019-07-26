import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {saga as mainSaga} from '@udacity/ureact-workspace/src/updater';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware, thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(combineReducers(reducers));

const codeSplitReducers = {};

export const addReducer = (name, reducer) => {
  codeSplitReducers[name] = reducer;
  store.replaceReducer(combineReducers({...reducers, ...codeSplitReducers}));
};

export default store;

sagaMiddleware.run(function*() {
  yield fork(mainSaga);
});
