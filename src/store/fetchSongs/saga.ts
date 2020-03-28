import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_SONGS_LIST } from "./consts";

type FetchSongsByTermParams = {
  payload: string;
};

export function* fetchSongs({ payload }: FetchSongsByTermParams) {
  try {
    const request = yield call(
      get,
      `search?entity=song&limit=100&term=${payload}`
    );
    console.log(request);
    yield put({ type: FETCH_SONGS_LIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_LIST.failure, message: e });
  }
}

export function* songsSaga(): SagaIterator {
  yield takeLatest(FETCH_SONGS_LIST.started, fetchSongs);
}
