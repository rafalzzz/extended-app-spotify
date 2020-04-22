import { fork } from "redux-saga/effects";

import { albumsSaga } from "./fetchAlbums/saga";
import { artistsSaga } from "./fetchArtists/saga";
import { songsSaga } from "./fetchSongs/saga";

export function* rootSaga(services = {}) {
  yield fork(albumsSaga);
  yield fork(artistsSaga);
  yield fork(songsSaga);
}
