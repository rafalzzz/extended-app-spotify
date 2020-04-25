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
  OVERFLOW,
  TERM,
  ARTIST,
  ALBUM,
  SONGS_LIST,
} from "./consts";

export type ItemsState = {
  song: Song;
  index: number;
  category: string;
  playlist: string;
  currentPlayed: Song;
  overflow: boolean;
  term: string;
  artist: string;
  album: string;
  currentSongsArray: any;
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
  overflow: false,
  term: "",
  artist: "",
  album: "",
  currentSongsArray: "",
};

export const items = (state = initialState, action: Action): ItemsState => {
  switch (action.type) {
    case SET_SONG:
      return { ...state, song: action.payload.song };
    case SET_INDEX:
      console.log(action);
      return { ...state, index: action.payload.id - 1 };
    case SET_CATEGORY:
      console.log(action);
      return { ...state, category: action.payload.category };
    case SET_PLAYLIST:
      return { ...state, playlist: action.payload.name };
    case PLAY_THIS_SONG:
      return { ...state, currentPlayed: action.payload.song };
    case PLAY_NEXT_SONG:
      console.log(action);
      return { ...state, index: state.index + action.payload.value };
    case PLAY_PREV_SONG:
      console.log(action);
      return { ...state, index: state.index - action.payload.value };
    case OVERFLOW:
      console.log(action);
      return { ...state, overflow: action.payload.show };
    case TERM:
      console.log(action);
      return { ...state, term: action.payload.term };
    case ARTIST:
      console.log(action);
      return { ...state, artist: action.payload.term };
    case ALBUM:
      console.log(action);
      return { ...state, album: action.payload.term };
    case SONGS_LIST:
      console.log(action);
      return { ...state, currentSongsArray: action.payload.songsArray };
    default:
      return state;
  }
};
