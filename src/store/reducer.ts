import { combineReducers } from "redux";

import { favSongsState, favSongsReducer } from "./favSongs/reducer";
import { songsListState, songsListReducer } from "./fetchSongs/reducer";
import { itemsState, itemsReducer } from "./items/reducer";
import { playerState, playerReducer } from "./player/reducer";
import { playlistsState, playlistsReducer } from "./playlists/reducer";

export type AppState = {
  songsListState: songsListState;
  favSongsState: favSongsState;
  itemsState: itemsState;
  playerState: playerState;
  playlistsState: playlistsState;
};

export const rootReducer = combineReducers<AppState>({
  songsListReducer,
  favSongsReducer,
  itemsReducer,
  playerReducer,
  playlistsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
