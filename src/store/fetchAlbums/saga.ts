import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_ALBUMS_LIST } from "./consts";
import { AnyAction } from "redux";

export type FetchSongsProps = {
  payload: { term: string; limit: number };
};

export function* fetchAlbums({ payload }: AnyAction) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=album&limit=${limit}&term=${term}`
    );
    console.log(request);
    yield put({ type: FETCH_ALBUMS_LIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_ALBUMS_LIST.failure, message: e });
  }
}

export function* albumsSaga(): SagaIterator {
  yield takeLatest(FETCH_ALBUMS_LIST.started, fetchAlbums);
}
