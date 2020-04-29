import { PLAY_THIS_ALBUM } from "./consts";

import { Action } from "../../helpers/actions";
import { Song } from "../models";

export type PlayThisAlbumState = {
  isLoading: boolean;
  isError: boolean;
  song: Song;
};

export const initialState = {
  isLoading: false,
  isError: false,
  song: {
    previewUrl: "",
    trackName: "",
    artistName: "",
    collectionName: "",
    releaseDate: "",
    artworkUrl60: "",
    artworkUrl100: "",
    artworkUrl30: "",
    trackTimeMillis: 0,
  },
};

export const playThisAlbum = (
  state = initialState,
  action: Action
): PlayThisAlbumState => {
  switch (action.type) {
    case PLAY_THIS_ALBUM.started:
      console.log(action);
      return {
        ...state,
        song: action.payload,
        isLoading: true,
        isError: false,
      };
    case PLAY_THIS_ALBUM.success:
      console.log(action);
      return {
        ...state,
        song: action.payload,
        isLoading: false,
        isError: false,
      };
    case PLAY_THIS_ALBUM.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
