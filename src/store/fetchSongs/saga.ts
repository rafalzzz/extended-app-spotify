import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import axios from "axios";

/* import { get } from "../../common/axios"; */

import { FETCH_SONGS_LIST } from "./consts";
import { AnyAction } from "redux";

export type FetchSongsProps = {
  payload: { term: string; limit: number };
};

export function* fetchSongs({ payload }: AnyAction) {
  try {
    const { term, limit } = payload;
    const request = yield axios.get(
      `https://itunes.apple.com/search?entity=musicTrack&limit=${limit}&term=${term}`
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
