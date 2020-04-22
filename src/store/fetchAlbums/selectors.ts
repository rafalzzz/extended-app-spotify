import { AppState } from "../reducer";
import { Album } from "../models";

export const songsListLength = (state: AppState): number =>
  state.albumsList.albums.resultCount;

export const albumsList = (state: AppState): Album[] =>
  state.albumsList.albums.results;

export const isLoading = (state: AppState): boolean =>
  state.albumsList.isLoading;

export const isError = (state: AppState): boolean => state.albumsList.isError;
