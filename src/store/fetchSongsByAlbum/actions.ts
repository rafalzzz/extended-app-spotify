import { FETCH_SONGS_BY_ALBUM_NAME } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
  limit: number;
};

export const fetchSongsByAlbumName = createAction(
  FETCH_SONGS_BY_ALBUM_NAME.started,
  (term, limit): Props => ({
    term,
    limit,
  })
)();
