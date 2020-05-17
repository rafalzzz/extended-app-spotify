import { AppState } from '../reducer';
import { Song } from '../models';

export const songsListByAlbumLength = (state: AppState): number =>
   state.songsListByAlbum.songs.resultCount;

export const songsListByAlbum = (state: AppState): Song[] =>
   state.songsListByAlbum.songs.results;

export const songsListByAlbumIsLoading = (state: AppState): boolean =>
   state.songsListByAlbum.isLoading;

export const songsListByAlbumIsError = (state: AppState): boolean =>
   state.songsListByAlbum.isError;
