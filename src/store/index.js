import {
  createStore,
  applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import combineReducers from "../reducers";
// import rootSaga from '../sagas';
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// store middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  combineReducers,
  composeEnhancers(
    applyMiddleware()
    // other store enhancers if any
  )
);

// sagaMiddleware.run(rootSaga);
export default store;