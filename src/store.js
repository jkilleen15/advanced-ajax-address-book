import state from "./state";
import reducers from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({}) : compose;

const enhancer = composeEnhancers(
  // middleware helps it handle AJAX
  applyMiddleware(thunk)
);

const store = createStore(reducers, state, enhancer);

export default store;
