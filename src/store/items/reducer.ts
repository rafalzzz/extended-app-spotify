import { Action } from "../../helpers/actions";

import { Song } from "../models";

import { getType } from "typesafe-actions";

import {
  setSong,
  setIndex,
  setCategory,
  setPlaylist,
  playThisSong,
  playNextSong,
  playPrevSong,
  overflow,
  setCurrentTerm,
  setArtist,
  setAlbum,
  setSongsList,
} from "./actions";

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
    case getType(setSong):
      return { ...state, song: action.payload.song };
    case getType(setIndex):
      return { ...state, index: action.payload.id - 1 };
    case getType(setCategory):
      return { ...state, category: action.payload.category };
    case getType(setPlaylist):
      return { ...state, playlist: action.payload.name };
    case getType(playThisSong):
      return { ...state, currentPlayed: action.payload.song };
    case getType(playNextSong):
      return { ...state, index: state.index + action.payload.value };
    case getType(playPrevSong):
      return { ...state, index: state.index - action.payload.value };
    case getType(overflow):
      return { ...state, overflow: action.payload.show };
    case getType(setCurrentTerm):
      return { ...state, term: action.payload.term };
    case getType(setArtist):
      return { ...state, artist: action.payload.term };
    case getType(setAlbum):
      return { ...state, album: action.payload.term };
    case getType(setSongsList):
      return { ...state, currentSongsArray: action.payload.songsArray };
    default:
      return state;
  }
};
