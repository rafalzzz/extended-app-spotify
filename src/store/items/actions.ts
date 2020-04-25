import {
  SET_SONG,
  SET_INDEX,
  SET_CATEGORY,
  SET_PLAYLIST,
  PLAY_THIS_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
  OVERFLOW,
  TERM,
  ARTIST,
  ALBUM,
  SONGS_LIST,
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

export type OverflowProps = {
  show: boolean;
};

export const overflow = createAction(
  OVERFLOW,
  (show): OverflowProps => ({
    show,
  })
)();

export type TermProps = {
  term: string;
};

export const setCurrentTerm = createAction(
  TERM,
  (term): TermProps => ({
    term,
  })
)();

export const setArtist = createAction(
  ARTIST,
  (term): TermProps => ({
    term,
  })
)();

export const setAlbum = createAction(
  ALBUM,
  (term): TermProps => ({
    term,
  })
)();

export type SongsListProps = {
  songsArray: Song[];
};

export const setSongsList = createAction(
  SONGS_LIST,
  (songsArray): SongsListProps => ({
    songsArray,
  })
)();
