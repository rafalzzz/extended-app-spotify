import { PLAY_THIS_ALBUM } from "./consts";

import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
  limit: number;
};

export const playAlbum = createAction(
  PLAY_THIS_ALBUM.started,
  (term, limit): Props => ({
    term,
    limit,
  })
)();
