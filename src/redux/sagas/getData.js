import { take, put, call, fork } from "redux-saga/effects";

import * as types from "../actions/ActionTypes";
import { success, failure } from "../actions/GETDATA";

import ApiSauce from "../../services/apiSauce";
import { GET_DATA_API } from "../../config/WebServices";

function callRequest(data) {
  return ApiSauce.get(GET_DATA_API, data);
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.GET_DATA.REQUEST);
    console.log(payload,'sagapayload')
    try {
      const response = yield call(callRequest, payload);
      console.log(response, "saga")
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
