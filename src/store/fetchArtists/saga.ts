import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import axios from "axios";

/* import { get } from "../../common/axios"; */

import { FETCH_ARTIST_LIST } from "./consts";
import { AnyAction } from "redux";

export function* fetchArtists({ payload }: AnyAction) {
  try {
    const { term } = payload;
    const request = yield axios.get(
      `https://itunes.apple.com/search?entity=musicArtist&limit=3&term=${term}`
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
