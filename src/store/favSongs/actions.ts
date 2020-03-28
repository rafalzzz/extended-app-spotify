import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from "./consts";

import { createAction } from "typesafe-actions";

export const addSongToFav = createAction(
  ADD_SONG_TO_FAV_LIST,
  (song: object) => ({
    song
  })
);

export const deleteSongFromFav = createAction(
  DELETE_SONG_FROM_FAV_LIST,
  (song: object) => ({
    song
  })
);
