import {
  SET_SONG,
  SET_INDEX,
  SET_CATEGORY,
  SET_PLAYLIST,
  PLAY_THIS_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
} from "./consts";

import { createAction } from "typesafe-actions";
import { Song } from "../models";

export const setSong = createAction(SET_SONG, (song: Song) => ({
  song,
}))();

export const setIndex = createAction(SET_INDEX, (id: number) => ({
  id,
}))();

export const setCategory = createAction(SET_CATEGORY, (category: string) => ({
  category,
}))();

export const setPlaylist = createAction(SET_PLAYLIST, (name: string) => ({
  name,
}))();

export const playThisSong = createAction(PLAY_THIS_SONG, (song: Song) => ({
  song,
}))();

export const playNextSong = createAction(PLAY_NEXT_SONG, (value: number) => ({
  value,
}))();

export const playPrevSong = createAction(PLAY_PREV_SONG, (value: number) => ({
  value,
}))();
