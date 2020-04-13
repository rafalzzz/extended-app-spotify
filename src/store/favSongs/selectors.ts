import { AppState } from "../reducer";
import { Song } from "../models";

export const favSongsList = (state: AppState): Song[] => state.favSongs;
