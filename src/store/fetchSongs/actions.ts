import { FETCH_SONGS_LIST } from "./consts";

import { createAction } from "typesafe-actions";

export type TermProps = {
  payload: { term: string };
};

export const fetchSongsStarted = createAction(
  FETCH_SONGS_LIST.started,
  (payload): TermProps => ({
    payload,
  })
)();
