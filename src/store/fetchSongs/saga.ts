import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import axios from "axios";

/* import { get } from "../../common/axios"; */

import { FETCH_SONGS_LIST } from "./consts";

export type payloadProps = {
  payload: { term: string };
};

export function* fetchSongs({ payload }: payloadProps) {
  try {
    const { term } = payload;
    const request = () =>
      yield axios.get(
        `https://itunes.apple.com/search?entity=song&limit=100&term=${term}`
      );
    console.log(request);
    yield put({ type: FETCH_SONGS_LIST.success, payload: Request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_LIST.failure, message: e });
  }
}

export function* songsSaga(): SagaIterator {
  yield takeLatest(FETCH_SONGS_LIST.started, fetchSongs);
}
