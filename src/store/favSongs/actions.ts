import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from "./consts";

import { createAction } from "typesafe-actions";

import { Song } from "../models";

export const addSongToFav = createAction(
  ADD_SONG_TO_FAV_LIST,
  (song: Song) => ({
    song,
  })
)();

export const deleteSongFromFav = createAction(
  DELETE_SONG_FROM_FAV_LIST,
  (song: Song) => ({
    song,
  })
)();
