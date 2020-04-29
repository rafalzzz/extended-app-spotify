import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../common/axios";

import { PLAY_THIS_ALBUM } from "./consts";
import { PLAY_THIS_SONG, SONGS_LIST } from "../items/consts";
import { PLAY_OR_STOP } from "../player/consts";

export type playThisAlbumProps = {
  type: typeof PLAY_THIS_ALBUM;
  payload: { term: string; limit: number };
};

export function* playThisAlbum({ payload }: playThisAlbumProps) {
  try {
    const { term, limit } = payload;
    const request = yield call(
      get,
      `search?entity=musicTrack&attribute=albumTerm&limit=${limit}&term=${term}`
    );
    console.log("Pobrany utwór", request.results[0]);
    if (request.results.length > 0) {
      yield put({ type: PLAY_THIS_ALBUM.success, payload: request.results[0] });
      yield put({ type: SONGS_LIST, payload: { songsArray: request.results } });
      yield put({
        type: PLAY_THIS_SONG,
        payload: { song: request.results[0] },
      });
      yield put({
        type: PLAY_OR_STOP,
        payload: { play: true },
      });
    }
  } catch (e) {
    yield put({ type: PLAY_THIS_ALBUM.failure, message: e });
  }
}

export function* playAlbumSaga(): SagaIterator {
  yield takeLatest(PLAY_THIS_ALBUM.started, playThisAlbum);
}
