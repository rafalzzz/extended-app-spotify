import { Action } from "../../helpers/actions";

import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from "./consts";

import { Song } from "../models";

export type favSongsState = Song[];

const initialState: Song[] = [];

export const favSongsReducer = (
  state = initialState,
  action: Action
): favSongsState => {
  switch (action.type) {
    case ADD_SONG_TO_FAV_LIST:
      return [...state, action.payload.song];
    case DELETE_SONG_FROM_FAV_LIST:
      return state.filter(song => song.previewUrl !== action.payload.id);
    default:
      return state;
  }
};
