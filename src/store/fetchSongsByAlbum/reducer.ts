import { FETCH_SONGS_BY_ALBUM_NAME } from './consts';

import { Action } from '../../helpers/actions';
import { getType } from 'typesafe-actions';
import { fetchSongsByAlbumName } from './actions';
import { Song } from '../models';

export type Results = {
   resultCount: number;
   results: Song[];
};

export type SongsListByAlbumState = {
   isLoading: boolean;
   isError: boolean;
   songs: Results;
};

export const initialState = {
   isLoading: false,
   isError: false,
   songs: { resultCount: 1, results: [] as Song[] },
};

export const songsListByAlbum = (
   state = initialState,
   action: Action,
): SongsListByAlbumState => {
   switch (action.type) {
      case getType(fetchSongsByAlbumName):
         return {
            ...state,
            songs: action.payload,
            isLoading: true,
            isError: false,
         };
      case FETCH_SONGS_BY_ALBUM_NAME.success:
         return {
            ...state,
            songs: action.payload,
            isLoading: false,
            isError: false,
         };
      case FETCH_SONGS_BY_ALBUM_NAME.failure:
         return {
            ...state,
            isLoading: false,
            isError: true,
         };
      default:
         return { ...state };
   }
};
