import { FETCH_SONGS_BY_ALBUM_NAME } from "./consts";

import { Action } from "../../helpers/actions";
import { getType } from "typesafe-actions";
import { fetchSongsByAlbumName } from "./actions";

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
    case getType(fetchSongsByAlbumName):
      return {
        ...state,
        songs: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_BY_ALBUM_NAME.success:
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_SONGS_BY_ALBUM_NAME.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
