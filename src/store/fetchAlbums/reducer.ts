import { FETCH_ALBUMS_LIST } from "./consts";

import { Action } from "../../helpers/actions";

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
    case FETCH_ALBUMS_LIST.started:
      console.log(action);
      return {
        ...state,
        albums: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_ALBUMS_LIST.success:
      console.log(action);
      return {
        ...state,
        albums: action.payload.data,
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
