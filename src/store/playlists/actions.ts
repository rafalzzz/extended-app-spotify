import {
  ADD_SONG_TO_PLAYLIST,
  DELETE_MUSIC_FROM_PLAYLIST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
} from "./consts";

import { createAction } from "typesafe-actions";

import { Song } from "../models";

export const addSongToPlaylist = createAction(
  ADD_SONG_TO_PLAYLIST,
  (playlistName: string, song: Song) => ({
    playlistName,
    song,
  })
)();

export const deleteSongFromPlaylist = createAction(
  DELETE_MUSIC_FROM_PLAYLIST,
  (playlistName: string, song: Song) => ({
    playlistName,
    song,
  })
)();

export const createPlaylist = createAction(CREATE_PLAYLIST, (name: any) => ({
  name,
}))();

export const deletePlaylist = createAction(DELETE_PLAYLIST, (name: string) => ({
  name,
}))();
