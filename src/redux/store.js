import { createStore, combineReducers } from "redux";
import reducers from "./counter/reducers";
const reducer = combineReducers({
  counter: reducers,
});
const store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
