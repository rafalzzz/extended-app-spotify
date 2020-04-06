import { AppState } from "../reducer";
import { Song } from "../models";

export const songsListLength = (state: AppState): number =>
  state.songsListState.songs.resultCount;

export const songsList = (state: AppState): Song[] =>
  state.songsListState.songs.results;

export const isLoading = (state: AppState): boolean =>
  state.songsListState.isLoading;

export const isError = (state: AppState): boolean =>
  state.songsListState.isError;
