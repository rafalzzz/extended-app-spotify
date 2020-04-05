import { Action } from "../../helpers/actions";

import { FETCH_SONGS_LIST } from "./consts";

import { Song } from "../models";

export type fetchResults = {
  resultCount: number;
  results: Song[];
};

export type songsListState = {
  isLoading: boolean;
  isError: boolean;
  songs: fetchResults;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: {
    resultCount: 0,
    results: [],
  },
};

export const songsListReducer = (
  state = initialState,
  action: Action
): songsListState => {
  switch (action.type) {
    case FETCH_SONGS_LIST.started:
      return {
        ...state,
        songs: action.payload.songs,
        isLoading: true,
        isError: false,
      };
    case FETCH_SONGS_LIST.success:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case FETCH_SONGS_LIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
