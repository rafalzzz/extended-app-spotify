import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getType } from 'typesafe-actions';

import { get } from '../../common/axios';

import { PLAY_THIS_ALBUM } from './consts';
import { PLAY_THIS_SONG, SONGS_LIST } from '../items/consts';
import { PLAY_OR_STOP } from '../player/consts';
import { SET_CATEGORY } from '../items/consts';
import { playAlbum } from './actions';

export function* playThisAlbum({ payload }: ReturnType<typeof playAlbum>) {
   try {
      const { term, limit } = payload;
      const request = yield call(
         get,
         `search?entity=musicTrack&attribute=albumTerm&limit=${limit}&term=${term}`,
      );
      if (request.results.length > 0) {
         yield put({
            type: PLAY_THIS_ALBUM.success,
            payload: request.results[0],
         });
         yield put({
            type: SONGS_LIST,
            payload: { songsArray: request.results },
         });
         yield put({
            type: SET_CATEGORY,
            payload: { category: 'songsByAlbum' },
         });
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
   yield takeLatest(getType(playAlbum), playThisAlbum);
}
