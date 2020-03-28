import { Action } from "../../helpers/actions";

import { FETCH_SONGS_LIST } from "./consts";

import { Song } from "../models";

type songsList = {
  resultCount: number;
  songsArray: Song[];
};

export type songsListState = {
  isLoading: boolean;
  isError: boolean;
  request: songsList;
};

export const initialState = {
  isLoading: false,
  isError: false,
  request: {
    resultCount: 0,
    songsArray: []
  }
};

export const songsListReducer = (
  state = initialState,
  action: Action
): songsListState => {
  switch (action.type) {
    case FETCH_SONGS_LIST.started:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SONGS_LIST.success:
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case FETCH_SONGS_LIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return { ...state };
  }
};
