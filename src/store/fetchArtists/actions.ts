import { FETCH_ARTIST_LIST } from './consts';

import { createAction } from 'typesafe-actions';

export type Props = {
   term: string;
};

export const fetchArtistsStarted = createAction(
   FETCH_ARTIST_LIST.started,
   (term): Props => ({
      term,
   }),
)();
