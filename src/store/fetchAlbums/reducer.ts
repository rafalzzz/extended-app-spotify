import { FETCH_ALBUMS_LIST } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../../helpers/actions";
import { fetchAlbumsStarted } from "./actions";

export type AlbumsListState = {
  isLoading: boolean;
  isError: boolean;
  albums: any;
};

export const initialState = {
  isLoading: false,
  isError: false,
  albums: [],
};

export const albumsList = (
  state = initialState,
  action: Action
): AlbumsListState => {
  switch (action.type) {
    case getType(fetchAlbumsStarted):
      return {
        ...state,
        albums: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_ALBUMS_LIST.success:
      return {
        ...state,
        albums: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_ALBUMS_LIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
