import { FETCH_ALBUMS_LIST } from './consts';

import { getType } from 'typesafe-actions';

import { Action } from '../../helpers/actions';
import { fetchAlbumsStarted } from './actions';
import { Album } from '../models';

export type Results = {
   resultCount: number | undefined;
   results: Album[];
};

export type AlbumsListState = {
   isLoading: boolean;
   isError: boolean;
   albums: Results;
};

export const initialState = {
   isLoading: false,
   isError: false,
   albums: { resultCount: 1, results: [] as Album[] },
};

export const albumsList = (
   state = initialState,
   action: Action,
): AlbumsListState => {
   switch (action.type) {
      case getType(fetchAlbumsStarted):
         return {
            ...state,
            albums: action.payload,
            isLoading: true,
            isError: false,
         };
      case FETCH_ALBUMS_LIST.success:
         return {
            ...state,
            albums: action.payload,
            isLoading: false,
            isError: false,
         };
      case FETCH_ALBUMS_LIST.failure:
         return {
            ...state,
            isLoading: false,
            isError: true,
         };
      default:
         return { ...state };
   }
};
