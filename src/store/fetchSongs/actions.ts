import { FETCH_SONGS_LIST } from './consts';

import { createAction } from 'typesafe-actions';

export type Props = {
   term: string;
   limit: number;
};

export const fetchSongsStarted = createAction(
   FETCH_SONGS_LIST.started,
   (term, limit): Props => ({
      term,
      limit,
   }),
)();
