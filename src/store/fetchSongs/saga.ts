import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import { FETCH_SONGS_LIST } from './consts';
import { getType } from 'typesafe-actions';
import { fetchSongsStarted } from './actions';

export function* fetchSongs({ payload }: ReturnType<typeof fetchSongsStarted>) {
   try {
      const { term, limit } = payload;
      const request = yield call(
         get,
         `search?entity=musicTrack&limit=${limit}&term=${term}`,
      );
      yield put({ type: FETCH_SONGS_LIST.success, payload: request });
   } catch (e) {
      yield put({ type: FETCH_SONGS_LIST.failure, message: e });
   }
}

export function* songsSaga(): SagaIterator {
   yield takeLatest(getType(fetchSongsStarted), fetchSongs);
}
