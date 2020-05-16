import { PLAY_THIS_ALBUM } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../../helpers/actions";
import { Song } from "../models";
import { playAlbum } from "./actions";

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
    case getType(playAlbum):
      return {
        ...state,
        song: action.payload,
        isLoading: true,
        isError: false,
      };
    case PLAY_THIS_ALBUM.success:
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
