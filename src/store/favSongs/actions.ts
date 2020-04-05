import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from "./consts";

import { createAction } from "typesafe-actions";

import { Song } from "../models";

export type AddOrDeleteSongFav = {
  payload: { song: Song };
};

export const addSongToFav = createAction(
  ADD_SONG_TO_FAV_LIST,
  (payload): AddOrDeleteSongFav => ({
    payload,
  })
)();

export const deleteSongFromFav = createAction(
  DELETE_SONG_FROM_FAV_LIST,
  (payload): AddOrDeleteSongFav => ({
    payload,
  })
)();
