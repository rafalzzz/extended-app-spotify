import { combineReducers } from 'redux';

import { FavSongsState, favSongs } from './favSongs/reducer';
import { AlbumsListState, albumsList } from './fetchAlbums/reducer';
import { ArtistsListState, artistsList } from './fetchArtists/reducer';
import { SongsListState, songsList } from './fetchSongs/reducer';
import {
   SongsListByAlbumState,
   songsListByAlbum,
} from './fetchSongsByAlbum/reducer';
import {
   SongsListByArtistState,
   songsListByArtist,
} from './fetchSongsByArtist/reducer';
import { ItemsState, items } from './items/reducer';
import { PlayerState, player } from './player/reducer';
import { PlaylistsState, playlists } from './playlists/reducer';
import { PlayThisAlbumState, playThisAlbum } from './playThisAlbum/reducer';

export type AppState = {
   albumsList: AlbumsListState;
   artistsList: ArtistsListState;
   songsList: SongsListState;
   songsListByAlbum: SongsListByAlbumState;
   songsListByArtist: SongsListByArtistState;
   favSongs: FavSongsState;
   items: ItemsState;
   player: PlayerState;
   playlists: PlaylistsState;
   playThisAlbum: PlayThisAlbumState;
};

export const reducer = combineReducers<AppState>({
   albumsList,
   artistsList,
   songsList,
   songsListByAlbum,
   songsListByArtist,
   favSongs,
   items,
   player,
   playlists,
   playThisAlbum,
});

export type RootState = ReturnType<typeof reducer>;
