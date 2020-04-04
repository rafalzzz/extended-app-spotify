import { Action } from "../../helpers/actions";

import { Song } from "../models";

import {
  SET_SONG,
  SET_INDEX,
  SET_PLAYLIST,
  SET_CATEGORY,
  PLAY_THIS_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
} from "./consts";

export type itemsState = {
  song: Song;
  index: number;
  category: string;
  playlist: string;
  currentPlayed: Song;
};

const initialState = {
  song: {
    previewUrl: "",
    trackName: "",
    artistName: "",
    collectionName: "",
    releaseDate: "",
    artworkUrl60: "",
    artworkUrl100: "",
    artworkUrl30: "",
    trackTimeMillis: 0,
  },
  index: 0,
  category: "search",
  playlist: "",
  currentPlayed: {
    previewUrl: "",
    trackName: "",
    artistName: "",
    collectionName: "",
    releaseDate: "",
    artworkUrl60: "",
    artworkUrl100: "",
    artworkUrl30: "",
    trackTimeMillis: 0,
  },
};

export const itemsReducer = (
  state = initialState,
  action: Action
): itemsState => {
  switch (action.type) {
    case SET_SONG:
      return { ...state, song: action.payload.song };
    case SET_INDEX:
      console.log(action);
      return { ...state, index: action.payload.id - 1 };
    case SET_CATEGORY:
      console.log(action);
      return { ...state, category: action.payload.term };
    case SET_PLAYLIST:
      return { ...state, playlist: action.payload.name };
    case PLAY_THIS_SONG:
      return { ...state, currentPlayed: action.payload.song };
    case PLAY_NEXT_SONG:
      return { ...state, index: state.index + action.payload.value };
    case PLAY_PREV_SONG:
      console.log(action);
      return { ...state, index: state.index - action.payload.value };
    default:
      return state;
  }
};
