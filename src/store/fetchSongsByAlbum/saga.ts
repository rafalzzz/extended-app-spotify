import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import { fetchSongsByAlbumName } from './actions';
import { getType } from 'typesafe-actions';

import { FETCH_SONGS_BY_ALBUM_NAME } from './consts';

export function* fetchSongsByAlbum({
   payload,
}: ReturnType<typeof fetchSongsByAlbumName>) {
   try {
      const { term, limit } = payload;
      const request = yield call(
         get,
         `search?entity=musicTrack&attribute=albumTerm&limit=${limit}&term=${term}`,
      );
      yield put({ type: FETCH_SONGS_BY_ALBUM_NAME.success, payload: request });
   } catch (e) {
      yield put({ type: FETCH_SONGS_BY_ALBUM_NAME.failure, message: e });
   }
}

export function* songsByAlbumSaga(): SagaIterator {
   yield takeLatest(getType(fetchSongsByAlbumName), fetchSongsByAlbum);
}
