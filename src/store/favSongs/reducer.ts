import { Action } from "../../helpers/actions";

import { getType } from "typesafe-actions";

import { addSongToFav, deleteSongFromFav } from "./actions";

import { Song } from "../models";

export type FavSongsState = Song[];

const initialState: Song[] = [];

export const favSongs = (
  state = initialState,
  action: Action
): FavSongsState => {
  switch (action.type) {
    case getType(addSongToFav):
      return [...state, action.payload.song];
    case getType(deleteSongFromFav):
      return state.filter(
        (song) => song.previewUrl !== action.payload.song.previewUrl
      );
    default:
      return state;
  }
};
