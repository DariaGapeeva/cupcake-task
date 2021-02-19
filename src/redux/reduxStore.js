import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tableReducer from "./tableReducer";

let rootReducer = combineReducers({
  table: tableReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
