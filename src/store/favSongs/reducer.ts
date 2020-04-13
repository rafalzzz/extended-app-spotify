import { Action } from "../../helpers/actions";

import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from "./consts";

import { Song } from "../models";

export type FavSongsState = Song[];

const initialState: Song[] = [];

export const favSongs = (
  state = initialState,
  action: Action
): FavSongsState => {
  switch (action.type) {
    case ADD_SONG_TO_FAV_LIST:
      console.log(action);
      return [...state, action.payload.song];
    case DELETE_SONG_FROM_FAV_LIST:
      console.log(action);
      return state.filter(
        (song) => song.previewUrl !== action.payload.song.previewUrl
      );
    default:
      return state;
  }
};
