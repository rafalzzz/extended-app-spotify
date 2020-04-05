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

export type SongProps = {
  payload: { song: Song };
};

export const setSong = createAction(
  SET_SONG,
  (payload): SongProps => ({
    payload,
  })
)();

export type IdProps = {
  payload: { id: number };
};

export const setIndex = createAction(
  SET_INDEX,
  (payload): IdProps => ({
    payload,
  })
)();

export type CategoryProps = {
  payload: { category: string };
};

export const setCategory = createAction(
  SET_CATEGORY,
  (payload): CategoryProps => ({
    payload,
  })
)();

export type NameProps = {
  payload: { name: string };
};

export const setPlaylist = createAction(
  SET_PLAYLIST,
  (payload): NameProps => ({
    payload,
  })
)();

export const playThisSong = createAction(
  PLAY_THIS_SONG,
  (payload): SongProps => ({
    payload,
  })
)();

export type ValueProps = {
  payload: { value: number };
};

export const playNextSong = createAction(
  PLAY_NEXT_SONG,
  (payload): ValueProps => ({
    payload,
  })
)();

export const playPrevSong = createAction(
  PLAY_PREV_SONG,
  (payload): ValueProps => ({
    payload,
  })
)();
