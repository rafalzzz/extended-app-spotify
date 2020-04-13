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
  play: boolean;
};

export const setPlay = createAction(
  PLAY_OR_STOP,
  (play): PlayProps => ({
    play,
  })
)();

export type PlayedProps = {
  played: number;
};

export const setPlayed = createAction(
  SET_PLAYED,
  (played): PlayedProps => ({
    played,
  })
)();

export type PipProps = {
  pip: boolean;
};

export const setPip = createAction(
  SET_PIP,
  (pip): PipProps => ({
    pip,
  })
)();

export type ControlsProps = {
  controls: boolean;
};

export const setControls = createAction(
  SET_CONTROLS,
  (controls): ControlsProps => ({
    controls,
  })
)();

export type LightProps = {
  light: boolean;
};

export const setLight = createAction(
  SET_LIGHT,
  (light): LightProps => ({
    light,
  })
)();

export type VolumeProps = {
  volume: number;
};

export const setVolume = createAction(
  SET_VOLUME,
  (volume): VolumeProps => ({
    volume,
  })
)();

export type MutedProps = {
  muted: boolean;
};

export const setMuted = createAction(
  SET_MUTED,
  (muted): MutedProps => ({
    muted,
  })
)();

export type LoadedProps = {
  loaded: number;
};

export const setLoaded = createAction(
  SET_LOADED,
  (loaded): LoadedProps => ({
    loaded,
  })
)();

export type DurationProps = {
  duration: number;
};

export const setDuration = createAction(
  SET_DURATION,
  (duration): DurationProps => ({
    duration,
  })
)();

export type PlaybackRateProps = {
  playbackRate: number;
};

export const setPlaybackRate = createAction(
  SET_PLAYBACK_RATE,
  (playbackRate): PlaybackRateProps => ({
    playbackRate,
  })
)();

export type LoopProps = {
  loop: boolean;
};

export const setLoop = createAction(
  SET_LOOP,
  (loop): LoopProps => ({
    loop,
  })
)();

export type SeekToProps = {
  seekTo: number;
};

export const seekTo = createAction(
  SEEK_TO,
  (seekTo): SeekToProps => ({
    seekTo,
  })
)();

export type ShuffleProps = {
  shuffle: boolean;
};

export const setShuffle = createAction(
  SET_SHUFFLE,
  (shuffle): ShuffleProps => ({
    shuffle,
  })
)();
