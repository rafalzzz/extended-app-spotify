import { AppState } from "../reducer";
import { Artist } from "../models";

export const artistsListLength = (state: AppState): number =>
  state.artistsList.artists.resultCount;

export const artistsList = (state: AppState): Artist[] =>
  state.artistsList.artists.results;

export const isLoading = (state: AppState): boolean =>
  state.artistsList.isLoading;

export const isError = (state: AppState): boolean => state.artistsList.isError;
