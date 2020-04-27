import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_ARTIST_LIST } from "./consts";

export type FetchArtistsProps = {
  type: typeof FETCH_ARTIST_LIST;
  payload: { term: string };
};

export function* fetchArtists({ payload }: FetchArtistsProps) {
  try {
    const { term } = payload;
    const request = yield call(
      get,
      `search?entity=musicArtist&limit=3&term=${term}`
    );
    console.log(request);
    yield put({ type: FETCH_ARTIST_LIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_ARTIST_LIST.failure, message: e });
  }
}

export function* artistsSaga(): SagaIterator {
  yield takeLatest(FETCH_ARTIST_LIST.started, fetchArtists);
}
