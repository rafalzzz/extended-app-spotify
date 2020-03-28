import { AppState } from "../reducer";

export const playRX = (state: AppState): boolean => state.playerState.play;
export const playedRX = (state: AppState): number => state.playerState.played;
export const pipRX = (state: AppState): boolean => state.playerState.pip;
export const controlsRX = (state: AppState): boolean =>
  state.playerState.controls;
export const lightRX = (state: AppState): boolean => state.playerState.light;
export const volumeRX = (state: AppState): number => state.playerState.volume;
export const mutedRX = (state: AppState): boolean => state.playerState.muted;
export const loadedRX = (state: AppState): number => state.playerState.loaded;
export const durationRX = (state: AppState): number =>
  state.playerState.duration;
export const playbackRateRX = (state: AppState): number =>
  state.playerState.playbackRate;
export const loopRX = (state: AppState): boolean => state.playerState.loop;
export const seekToRX = (state: AppState): number => state.playerState.seekTo;
export const shuffleRX = (state: AppState): boolean =>
  state.playerState.shuffle;
