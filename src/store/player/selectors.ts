import { AppState } from "../reducer";

export const playRX = (state: AppState): boolean => state.player.play;
export const playedRX = (state: AppState): number => state.player.played;
export const pipRX = (state: AppState): boolean => state.player.pip;
export const controlsRX = (state: AppState): boolean => state.player.controls;
export const lightRX = (state: AppState): boolean => state.player.light;
export const volumeRX = (state: AppState): number => state.player.volume;
export const mutedRX = (state: AppState): boolean => state.player.muted;
export const loadedRX = (state: AppState): number => state.player.loaded;
export const durationRX = (state: AppState): number => state.player.duration;
export const playbackRateRX = (state: AppState): number =>
  state.player.playbackRate;
export const loopRX = (state: AppState): boolean => state.player.loop;
export const seekToRX = (state: AppState): number => state.player.seekTo;
export const shuffleRX = (state: AppState): boolean => state.player.shuffle;
