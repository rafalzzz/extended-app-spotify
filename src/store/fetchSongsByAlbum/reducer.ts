import { FETCH_SONGS_BY_ALBUM } from "./consts";

import { Action } from "../../helpers/actions";

export type SongsListByAlbumState = {
  isLoading: boolean;
  isError: boolean;
  songs: any;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: [],
};

export const songsListByAlbum = (
  state = initialState,
  action: Action
): SongsListByAlbumState => {
  switch (action.type) {
    case FETCH_SONGS_BY_ALBUM.started:
      console.log(action);
      return {
        ...state,
        songs: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_BY_ALBUM.success:
      console.log(action);
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_SONGS_BY_ALBUM.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
