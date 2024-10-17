
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers';
import { thunk } from 'redux-thunk';

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;