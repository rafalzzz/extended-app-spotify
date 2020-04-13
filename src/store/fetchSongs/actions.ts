import { FETCH_SONGS_LIST } from "./consts";

import { createAction } from "typesafe-actions";

export type TermProps = {
  term: string;
};

export const fetchSongsStarted = createAction(
  FETCH_SONGS_LIST.started,
  (term): TermProps => ({
    term,
  })
)();
