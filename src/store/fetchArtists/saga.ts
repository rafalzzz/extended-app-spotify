import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_ARTIST_LIST } from "./consts";
import { getType } from "typesafe-actions";
import { fetchArtistsStarted } from "./actions";

export function* fetchArtists({
  payload,
}: ReturnType<typeof fetchArtistsStarted>) {
  try {
    const { term } = payload;
    const request = yield call(
      get,
      `search?entity=musicArtist&limit=3&term=${term}`
    );
    yield put({ type: FETCH_ARTIST_LIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_ARTIST_LIST.failure, message: e });
  }
}

export function* artistsSaga(): SagaIterator {
  yield takeLatest(getType(fetchArtistsStarted), fetchArtists);
}
