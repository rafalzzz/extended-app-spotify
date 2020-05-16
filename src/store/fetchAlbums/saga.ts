import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_ALBUMS_LIST } from "./consts";
import { fetchAlbumsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* fetchAlbums({
  payload,
}: ReturnType<typeof fetchAlbumsStarted>) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=album&limit=${limit}&term=${term}`
    );
    yield put({ type: FETCH_ALBUMS_LIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_ALBUMS_LIST.failure, message: e });
  }
}

export function* albumsSaga(): SagaIterator {
  yield takeLatest(getType(fetchAlbumsStarted), fetchAlbums);
}
