import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import tableReducer from "./tableReducer";
import { rootSaga } from "./sagas";

const saga = createSagaMiddleware();

let rootReducer = combineReducers({
  table: tableReducer,
});

let store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store;
