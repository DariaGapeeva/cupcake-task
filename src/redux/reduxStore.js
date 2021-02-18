import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tableReducer from "./tableReduser";

let rootReducer = combineReducers({
  table: tableReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
