import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { replaceNotes } from './config/notes';
import combinedReducers from './config';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

store.dispatch(replaceNotes());

export default store;
