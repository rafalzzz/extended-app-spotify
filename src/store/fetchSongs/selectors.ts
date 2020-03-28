import { AppState } from "../reducer";
import { Song } from "../models";

export const songsArrayLength = (state: AppState): number =>
  state.songsList.request.resultCount;

export const songsList = (state: AppState): Song[] =>
  state.songsList.request.songsArray;

export const isLoading = (state: AppState): boolean =>
  state.songsList.isLoading;

export const isError = (state: AppState): boolean => state.songsList.isError;
