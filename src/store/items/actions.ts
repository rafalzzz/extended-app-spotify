import {
  SET_SONG,
  SET_INDEX,
  SET_CATEGORY,
  SET_PLAYLIST,
  PLAY_THIS_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG
} from "./consts";

import { createAction } from "typesafe-actions";

export const setSong = createAction(
  SET_SONG,
  (
    previewUrl: string,
    trackName: string,
    artistName: string,
    collectionName: string,
    releaseDate: string,
    artworkUrl60: string,
    trackTimeMillis: number,
    ...song: any
  ) => ({
    previewUrl,
    trackName,
    artistName,
    collectionName,
    releaseDate,
    trackTimeMillis,
    artworkUrl60,
    ...song
  })
);

export const setIndex = createAction(SET_INDEX, (id: number) => ({
  id
}));

export const setCategory = createAction(SET_CATEGORY, (category: string) => ({
  category
}));

export const setPlaylist = createAction(SET_PLAYLIST, (name: string) => ({
  name
}));

export const handlePlayThisSong = createAction(
  PLAY_THIS_SONG,
  (
    previewUrl: string,
    trackName: string,
    artistName: string,
    collectionName: string,
    releaseDate: string,
    artworkUrl60: string,
    trackTimeMillis: number,
    ...song: any
  ) => ({
    previewUrl,
    trackName,
    artistName,
    collectionName,
    releaseDate,
    trackTimeMillis,
    artworkUrl60,
    ...song
  })
);

export const handlePlayNextSong = createAction(
  PLAY_NEXT_SONG,
  (value: number) => ({
    value
  })
);

export const handlePlayPrevSong = createAction(
  PLAY_PREV_SONG,
  (value: number) => ({
    value
  })
);
