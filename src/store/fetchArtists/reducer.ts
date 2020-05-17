import { FETCH_ARTIST_LIST } from './consts';

import { Action } from '../../helpers/actions';
import { getType } from 'typesafe-actions';
import { fetchArtistsStarted } from './actions';
import { Artist } from '../models';

export type Results = {
   resultCount: number;
   results: Artist[];
};

export type ArtistsListState = {
   isLoading: boolean;
   isError: boolean;
   artists: Results;
};

export const initialState = {
   isLoading: false,
   isError: false,
   artists: { resultCount: 1, results: [] as Artist[] },
};

export const artistsList = (
   state = initialState,
   action: Action,
): ArtistsListState => {
   switch (action.type) {
      case getType(fetchArtistsStarted):
         return {
            ...state,
            artists: action.payload,
            isLoading: true,
            isError: false,
         };
      case FETCH_ARTIST_LIST.success:
         return {
            ...state,
            artists: action.payload,
            isLoading: false,
            isError: false,
         };
      case FETCH_ARTIST_LIST.failure:
         return {
            ...state,
            isLoading: false,
            isError: true,
         };
      default:
         return { ...state };
   }
};
