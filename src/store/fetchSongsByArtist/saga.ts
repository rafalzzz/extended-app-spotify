import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { AnyAction } from "redux";

export type FetchSongsProps = {
  payload: { term: string; limit: number };
};

export function* fetchSongsByArtist({ payload }: AnyAction) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=musicTrack&attribute=artistTerm&limit=${limit}&term=${term}`
    );
    console.log(request);
    yield put({ type: FETCH_SONGS_BY_ARTIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_BY_ARTIST.failure, message: e });
  }
}

export function* songsByArtistSaga(): SagaIterator {
  yield takeLatest(FETCH_SONGS_BY_ARTIST.started, fetchSongsByArtist);
}
