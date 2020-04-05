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

export type PlayProps = {
  payload: { play: boolean };
};

export const setPlay = createAction(
  PLAY_OR_STOP,
  (payload): PlayProps => ({
    payload,
  })
)();

export type PlayedProps = {
  payload: { played: number };
};

export const setPlayed = createAction(
  SET_PLAYED,
  (payload): PlayedProps => ({
    payload,
  })
)();

export type PipProps = {
  payload: { pip: boolean };
};

export const setPip = createAction(
  SET_PIP,
  (payload): PipProps => ({
    payload,
  })
)();

export type ControlsProps = {
  payload: { controls: boolean };
};

export const setControls = createAction(
  SET_CONTROLS,
  (payload): ControlsProps => ({
    payload,
  })
)();

export type LightProps = {
  payload: { light: boolean };
};

export const setLight = createAction(
  SET_LIGHT,
  (payload): LightProps => ({
    payload,
  })
)();

export type VolumeProps = {
  payload: { volume: number };
};

export const setVolume = createAction(
  SET_VOLUME,
  (payload): VolumeProps => ({
    payload,
  })
)();

export type MutedProps = {
  payload: { muted: boolean };
};

export const setMuted = createAction(
  SET_MUTED,
  (payload): MutedProps => ({
    payload,
  })
)();

export type LoadedProps = {
  payload: { loaded: number };
};

export const setLoaded = createAction(
  SET_LOADED,
  (payload): LoadedProps => ({
    payload,
  })
)();

export type DurationProps = {
  payload: { duration: number };
};

export const setDuration = createAction(
  SET_DURATION,
  (payload): DurationProps => ({
    payload,
  })
)();

export type PlaybackRateProps = {
  payload: { playbackRate: number };
};

export const setPlaybackRate = createAction(
  SET_PLAYBACK_RATE,
  (payload): PlaybackRateProps => ({
    payload,
  })
)();

export type LoopProps = {
  payload: { loop: boolean };
};

export const setLoop = createAction(
  SET_LOOP,
  (payload): LoopProps => ({
    payload,
  })
)();

export type SeekToProps = {
  payload: { seekTo: number };
};

export const seekTo = createAction(
  SEEK_TO,
  (payload): SeekToProps => ({
    payload,
  })
)();

export type ShuffleProps = {
  payload: { shuffle: boolean };
};

export const setShuffle = createAction(
  SET_SHUFFLE,
  (payload): ShuffleProps => ({
    payload,
  })
)();
