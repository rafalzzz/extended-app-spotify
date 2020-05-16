import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { fetchSongsByArtistName } from "./actions";

import { Action } from "../../helpers/actions";
import { getType } from "typesafe-actions";

export type SongsListByArtistState = {
  isLoading: boolean;
  isError: boolean;
  songs: any;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: [],
};

export const songsListByArtist = (
  state = initialState,
  action: Action
): SongsListByArtistState => {
  switch (action.type) {
    case getType(fetchSongsByArtistName):
      return {
        ...state,
        songs: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_BY_ARTIST.success:
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_SONGS_BY_ARTIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
