import { AppState } from "../reducer";
import { Song } from "../models";

export const currentSong = (state: AppState): Song =>
  state.itemsState.song.song;
export const currentIndex = (state: AppState): number => state.itemsState.index;
export const currentCategory = (state: AppState): string =>
  state.itemsState.category;
export const currentPlaylist = (state: AppState): string =>
  state.itemsState.playlist;
export const NowPlayedSong = (state: AppState): Song =>
  state.itemsState.currentPlayed.song;
