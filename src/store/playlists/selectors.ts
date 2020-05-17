import { AppState } from '../reducer';
import { Playlist } from '../models';

export const playlists = (state: AppState): Playlist[] => state.playlists;
