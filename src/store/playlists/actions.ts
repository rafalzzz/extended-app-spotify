import {
  ADD_SONG_TO_PLAYLIST,
  DELETE_MUSIC_FROM_PLAYLIST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
} from "./consts";

import { createAction } from "typesafe-actions";

import { Song } from "../models";

export type AddOrDeleteSongPlaylistProps = {
  payload: {
    playlistName: string;
    song: Song;
  };
};

export const addSongToPlaylist = createAction(
  ADD_SONG_TO_PLAYLIST,
  (payload): AddOrDeleteSongPlaylistProps => ({
    payload,
  })
)();

export const deleteSongFromPlaylist = createAction(
  DELETE_MUSIC_FROM_PLAYLIST,
  (payload): AddOrDeleteSongPlaylistProps => ({
    payload,
  })
)();

export type CreateOrDeletePlaylistProps = {
  payload: {
    name: string;
  };
};

export const createPlaylist = createAction(
  CREATE_PLAYLIST,
  (payload): CreateOrDeletePlaylistProps => ({
    payload,
  })
)();

export const deletePlaylist = createAction(
  DELETE_PLAYLIST,
  (payload): CreateOrDeletePlaylistProps => ({
    payload,
  })
)();
