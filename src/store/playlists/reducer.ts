import { Action } from '../../helpers/actions';

import { Playlist } from '../models';

import { getType } from 'typesafe-actions';

import {
   addSongToPlaylist,
   deleteSongFromPlaylist,
   createPlaylist,
   deletePlaylist,
} from './actions';

export type PlaylistsState = Playlist[];

const initialState: PlaylistsState = [];

export const playlists = (
   state = initialState,
   action: Action,
): PlaylistsState => {
   switch (action.type) {
      case getType(addSongToPlaylist):
         return state.map((playlist) => ({
            ...playlist,
            songs:
               playlist.name === action.payload.name
                  ? [...playlist.songs, action.payload.song]
                  : [...playlist.songs],
         }));
      case getType(deleteSongFromPlaylist):
         return state.map((playlist) => ({
            ...playlist,
            songs:
               playlist.name === action.payload.name
                  ? playlist.songs.filter(
                       (song) =>
                          song.previewUrl !== action.payload.song.previewUrl,
                    )
                  : [...playlist.songs],
         }));
      case getType(createPlaylist):
         return [
            ...state,
            {
               name: action.payload.name,
               songs: [],
            },
         ];
      case getType(deletePlaylist):
         return state.filter(
            (playlist) => playlist.name !== action.payload.name,
         );
      default:
         return state;
   }
};
