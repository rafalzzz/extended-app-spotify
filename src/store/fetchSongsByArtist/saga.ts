import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { getType } from "typesafe-actions";

import { get } from "../../common/axios";

import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { fetchSongsByArtistName } from "./actions";

export type FetchSongsByArtistProps = {
  type: typeof FETCH_SONGS_BY_ARTIST;
  payload: { term: string; limit: number };
};

export function* fetchSongsByArtist({
  payload,
}: ReturnType<typeof fetchSongsByArtistName>) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=musicTrack&attribute=artistTerm&limit=${limit}&term=${term}`
    );
    yield put({ type: FETCH_SONGS_BY_ARTIST.success, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_BY_ARTIST.failure, message: e });
  }
}

export function* songsByArtistSaga(): SagaIterator {
  yield takeLatest(getType(fetchSongsByArtistName), fetchSongsByArtist);
}
