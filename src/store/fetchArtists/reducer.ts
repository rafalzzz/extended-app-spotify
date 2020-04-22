import { FETCH_ARTIST_LIST } from "./consts";

import { Action } from "../../helpers/actions";

export type ArtistsListState = {
  isLoading: boolean;
  isError: boolean;
  artists: any;
};

export const initialState = {
  isLoading: false,
  isError: false,
  artists: [],
};

export const artistsList = (
  state = initialState,
  action: Action
): ArtistsListState => {
  switch (action.type) {
    case FETCH_ARTIST_LIST.started:
      console.log(action);
      return {
        ...state,
        artists: action.payload,
        isLoading: true,
        isError: false,
      };
    case FETCH_ARTIST_LIST.success:
      console.log(action);
      return {
        ...state,
        artists: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case FETCH_ARTIST_LIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
