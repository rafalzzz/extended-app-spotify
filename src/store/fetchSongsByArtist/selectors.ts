import { AppState } from '../reducer';
import { Song } from '../models';

export const songsListByArtistLength = (state: AppState): number =>
   state.songsListByArtist.songs.resultCount;

export const songsListByArtist = (state: AppState): Song[] =>
   state.songsListByArtist.songs.results;

export const songsListByArtistIsLoading = (state: AppState): boolean =>
   state.songsListByArtist.isLoading;

export const songsListByArtistIsError = (state: AppState): boolean =>
   state.songsListByArtist.isError;
