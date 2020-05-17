import {
   ADD_SONG_TO_PLAYLIST,
   DELETE_MUSIC_FROM_PLAYLIST,
   CREATE_PLAYLIST,
   DELETE_PLAYLIST,
} from './consts';

import { createAction } from 'typesafe-actions';

import { Song } from '../models';

export type AddOrDeleteSongPlaylistProps = {
   name: string;
   song: Song;
};

export const addSongToPlaylist = createAction(
   ADD_SONG_TO_PLAYLIST,
   (name, song): AddOrDeleteSongPlaylistProps => ({
      name,
      song,
   }),
)();

export const deleteSongFromPlaylist = createAction(
   DELETE_MUSIC_FROM_PLAYLIST,
   (name, song): AddOrDeleteSongPlaylistProps => ({
      name,
      song,
   }),
)();

export type CreateOrDeletePlaylistProps = {
   name: string;
};

export const createPlaylist = createAction(
   CREATE_PLAYLIST,
   (name): CreateOrDeletePlaylistProps => ({
      name,
   }),
)();

export const deletePlaylist = createAction(
   DELETE_PLAYLIST,
   (name): CreateOrDeletePlaylistProps => ({
      name,
   }),
)();
