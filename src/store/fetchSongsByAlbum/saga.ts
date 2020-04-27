import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_SONGS_BY_ALBUM } from "./consts";

export type FetchSongsByAlbumProps = {
  type: typeof FETCH_SONGS_BY_ALBUM;
  payload: { term: string; limit: number };
};

export function* fetchSongsByAlbum({ payload }: FetchSongsByAlbumProps) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=musicTrack&attribute=albumTerm&limit=${limit}&term=${term}`
    );
    console.log(request);
    yield put({ type: FETCH_SONGS_BY_ALBUM.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_BY_ALBUM.failure, message: e });
  }
}

export function* songsByAlbumSaga(): SagaIterator {
  yield takeLatest(FETCH_SONGS_BY_ALBUM.started, fetchSongsByAlbum);
}
