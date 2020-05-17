import { FETCH_ALBUMS_LIST } from './consts';

import { createAction } from 'typesafe-actions';

export type Props = {
   term: string;
   limit: number;
};

export const fetchAlbumsStarted = createAction(
   FETCH_ALBUMS_LIST.started,
   (term, limit): Props => ({
      term,
      limit,
   }),
)();
