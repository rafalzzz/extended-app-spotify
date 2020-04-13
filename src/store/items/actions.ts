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
  song: Song;
};

export const setSong = createAction(
  SET_SONG,
  (song): SongProps => ({
    song,
  })
)();

export type IdProps = {
  id: number;
};

export const setIndex = createAction(
  SET_INDEX,
  (id): IdProps => ({
    id,
  })
)();

export type CategoryProps = {
  category: string;
};

export const setCategory = createAction(
  SET_CATEGORY,
  (category): CategoryProps => ({
    category,
  })
)();

export type NameProps = {
  name: string;
};

export const setPlaylist = createAction(
  SET_PLAYLIST,
  (name): NameProps => ({
    name,
  })
)();

export const playThisSong = createAction(
  PLAY_THIS_SONG,
  (song): SongProps => ({
    song,
  })
)();

export type ValueProps = {
  value: number;
};

export const playNextSong = createAction(
  PLAY_NEXT_SONG,
  (value): ValueProps => ({
    value,
  })
)();

export const playPrevSong = createAction(
  PLAY_PREV_SONG,
  (value): ValueProps => ({
    value,
  })
)();
