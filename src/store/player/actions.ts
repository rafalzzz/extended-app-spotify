import {
  PLAY_OR_STOP,
  SET_PLAYED,
  SET_PIP,
  SET_CONTROLS,
  SET_LIGHT,
  SET_VOLUME,
  SET_MUTED,
  SET_LOADED,
  SET_DURATION,
  SET_PLAYBACK_RATE,
  SET_LOOP,
  SEEK_TO,
  SET_SHUFFLE,
} from "./consts";

import { createAction } from "typesafe-actions";

export const setPlay = createAction(PLAY_OR_STOP, (play: boolean) => ({
  play,
}))();

export const setPlayed = createAction(SET_PLAYED, (played: number) => ({
  played,
}))();

export const setPip = createAction(SET_PIP, (pip: boolean) => ({
  pip,
}))();

export const setControls = createAction(SET_CONTROLS, (controls: boolean) => ({
  controls,
}))();

export const setLight = createAction(SET_LIGHT, (light: boolean) => ({
  light,
}))();

export const setVolume = createAction(SET_VOLUME, (volume: number) => ({
  volume,
}))();

export const setMuted = createAction(SET_MUTED, (muted: boolean) => ({
  muted,
}))();

export const setLoaded = createAction(SET_LOADED, (loaded: number) => ({
  loaded,
}))();

export const setDuration = createAction(SET_DURATION, (duration: number) => ({
  duration,
}))();

export const setPlaybackRate = createAction(
  SET_PLAYBACK_RATE,
  (playbackRate: number) => ({
    playbackRate,
  })
)();

export const setLoop = createAction(SET_LOOP, (loop: boolean) => ({
  loop,
}))();

export const seekTo = createAction(SEEK_TO, (seekTo: number) => ({
  seekTo,
}))();

export const setShuffle = createAction(SET_SHUFFLE, (shuffle: boolean) => ({
  shuffle,
}))();
