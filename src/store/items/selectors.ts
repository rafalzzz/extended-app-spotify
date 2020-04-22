import { AppState } from "../reducer";
import { Song } from "../models";

export const currentSong = (state: AppState): Song => state.items.song;
export const currentIndex = (state: AppState): number => state.items.index;
export const currentCategory = (state: AppState): string =>
  state.items.category;
export const currentPlaylist = (state: AppState): string =>
  state.items.playlist;
export const NowPlayedSong = (state: AppState): Song =>
  state.items.currentPlayed;
export const showOverflow = (state: AppState): boolean => state.items.overflow;
export const currentTerm = (state: AppState): string => state.items.term;
