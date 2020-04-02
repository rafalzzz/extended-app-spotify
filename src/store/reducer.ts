import { combineReducers } from "redux";

import { favSongsState, favSongsReducer } from "./favSongs/reducer";
import { songsListState, songsListReducer } from "./fetchSongs/reducer";
import { itemsState, itemsReducer } from "./items/reducer";
import { playerState, playerReducer } from "./player/reducer";
import { playlistsState, playlistsReducer } from "./playlists/reducer";

export type AppState = {
  songsList: songsListState;
  favSongsState: favSongsState;
  itemsState: itemsState;
  playerState: playerState;
  playlistsState: playlistsState;
};

const reducers = {
  songsListReducer,
  favSongsReducer,
  itemsReducer,
  playerReducer,
  playlistsReducer
};

export const rootReducer = combineReducers<AppState>(reducers);

export type RootState = ReturnType<typeof rootReducer>;
