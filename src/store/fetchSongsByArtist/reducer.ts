import { FETCH_SONGS_BY_ARTIST } from "./consts";

import { Action } from "../../helpers/actions";

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
    case FETCH_SONGS_BY_ARTIST.started:
      console.log(action);
      return {
        ...state,
        songs: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_BY_ARTIST.success:
      console.log(action);
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
