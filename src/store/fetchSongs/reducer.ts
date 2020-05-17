import { FETCH_SONGS_LIST } from './consts';

import { Action } from '../../helpers/actions';
import { getType } from 'typesafe-actions';
import { fetchSongsStarted } from './actions';
import { Song } from '../models';

export type Results = {
   resultCount: number;
   results: Song[];
};

export type SongsListState = {
   isLoading: boolean;
   isError: boolean;
   songs: Results;
};

export const initialState = {
   isLoading: false,
   isError: false,
   songs: { resultCount: 1, results: [] as Song[] },
};

export const songsList = (
   state = initialState,
   action: Action,
): SongsListState => {
   switch (action.type) {
      case getType(fetchSongsStarted):
         return {
            ...state,
            songs: action.payload,
            isLoading: true,
            isError: false,
         };
      case FETCH_SONGS_LIST.success:
         return {
            ...state,
            songs: action.payload,
            isLoading: false,
            isError: false,
         };
      case FETCH_SONGS_LIST.failure:
         return {
            ...state,
            isLoading: false,
            isError: true,
         };
      default:
         return { ...state };
   }
};
