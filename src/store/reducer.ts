import { combineReducers } from "redux";

import { FavSongsState, favSongs } from "./favSongs/reducer";
import { AlbumsListState, albumsList } from "./fetchAlbums/reducer";
import { ArtistsListState, artistsList } from "./fetchArtists/reducer";
import { SongsListState, songsList } from "./fetchSongs/reducer";
import { ItemsState, items } from "./items/reducer";
import { PlayerState, player } from "./player/reducer";
import { PlaylistsState, playlists } from "./playlists/reducer";

export type AppState = {
  albumsList: AlbumsListState;
  artistsList: ArtistsListState;
  songsList: SongsListState;
  favSongs: FavSongsState;
  items: ItemsState;
  player: PlayerState;
  playlists: PlaylistsState;
};

export const reducer = combineReducers<AppState>({
  albumsList,
  artistsList,
  songsList,
  favSongs,
  items,
  player,
  playlists,
});

export type RootState = ReturnType<typeof reducer>;
