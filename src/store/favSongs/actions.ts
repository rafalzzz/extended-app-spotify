import { ADD_SONG_TO_FAV_LIST, DELETE_SONG_FROM_FAV_LIST } from './consts';

import { createAction } from 'typesafe-actions';

import { Song } from '../models';

export type AddOrDeleteSongFav = {
   song: Song;
};

export const addSongToFav = createAction(
   ADD_SONG_TO_FAV_LIST,
   (song): AddOrDeleteSongFav => ({
      song,
   }),
)();

export const deleteSongFromFav = createAction(
   DELETE_SONG_FROM_FAV_LIST,
   (song): AddOrDeleteSongFav => ({
      song,
   }),
)();
