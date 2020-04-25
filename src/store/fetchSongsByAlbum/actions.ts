import { FETCH_SONGS_BY_ALBUM } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
  limit: number;
};

export const fetchSongsByAlbum = createAction(
  FETCH_SONGS_BY_ALBUM.started,
  (term, limit): Props => ({
    term,
    limit,
  })
)();
