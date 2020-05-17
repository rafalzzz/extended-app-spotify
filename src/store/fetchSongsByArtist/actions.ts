import { FETCH_SONGS_BY_ARTIST } from './consts';

import { createAction } from 'typesafe-actions';

export type Props = {
   term: string;
   limit: number;
};

export const fetchSongsByArtistName = createAction(
   FETCH_SONGS_BY_ARTIST.started,
   (term, limit): Props => ({
      term,
      limit,
   }),
)();
