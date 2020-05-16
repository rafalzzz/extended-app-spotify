import { Action } from "../../helpers/actions";

import { getType } from "typesafe-actions";

import {
  setPlay,
  setPlayed,
  setPip,
  setControls,
  setLight,
  setVolume,
  setMuted,
  setLoaded,
  setDuration,
  setPlaybackRate,
  setLoop,
  seekTo,
  setShuffle,
} from "./actions";

export type PlayerState = {
  play: boolean;
  played: number;
  pip: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  seekTo: number;
  shuffle: boolean;
};

const initialState = {
  play: false,
  played: 0,
  pip: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  loaded: 0,
  duration: 0,
  playbackRate: 0,
  loop: false,
  seekTo: 0,
  shuffle: false,
};

export const player = (state = initialState, action: Action): PlayerState => {
  switch (action.type) {
    case getType(setPlay):
      return { ...state, play: action.payload.play };
    case getType(setPlayed):
      return { ...state, played: action.payload.played };
    case getType(setPip):
      return { ...state, pip: action.payload.pip };
    case getType(setControls):
      return { ...state, controls: action.payload.controls };
    case getType(setLight):
      return { ...state, light: action.payload.light };
    case getType(setVolume):
      return { ...state, volume: action.payload.volume };
    case getType(setMuted):
      return { ...state, muted: action.payload.muted };
    case getType(setLoaded):
      return { ...state, loaded: action.payload.loaded };
    case getType(setDuration):
      return { ...state, duration: action.payload.duration };
    case getType(setPlaybackRate):
      return { ...state, playbackRate: action.payload.playbackRate };
    case getType(setLoop):
      return { ...state, loop: action.payload.loop };
    case getType(seekTo):
      return { ...state, seekTo: action.payload.seekTo };
    case getType(setShuffle):
      return { ...state, shuffle: action.payload.shuffle };
    default:
      return state;
  }
};
