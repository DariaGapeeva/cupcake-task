import { all, call, put, takeEvery } from "redux-saga/effects";
import { api } from "./../API/api";
import { setValuesAC, setValuesPollAC } from "./tableReducer";
import { TABLE_SET_VALUES_FIRST, TABLE_SET_VALUES_POLL } from "./tableReducer";

export function* setValuesFirstWatcher() {
  yield takeEvery(TABLE_SET_VALUES_FIRST, setValuesFirstWorker);
}

function* setValuesFirstWorker(action) {
  const response = yield call(api.setRates, action.address);
  yield put(setValuesAC(action.id, response.data.rates));
}

export function* setValuesPollWatcher() {
  yield takeEvery(TABLE_SET_VALUES_POLL, setValuesPollWorker);
}

function* setValuesPollWorker(action) {
  const response = yield call(api.setRates, action.address);
  if (response.status == 502) {
    yield put(setValuesPollAC(action.address, action.id));
  } else if (response.status != 200) {
    console.log("ошибка");
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    yield put(setValuesPollAC(action.address, action.id));
  } else {
    yield put(setValuesAC(action.id, response.data.rates));
    yield put(setValuesPollAC(action.address, action.id));
  }
}

export function* rootSaga() {
  yield all([setValuesFirstWatcher(), setValuesPollWatcher()]);
}
