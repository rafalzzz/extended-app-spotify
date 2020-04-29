import { fork } from "redux-saga/effects";

import { albumsSaga } from "./fetchAlbums/saga";
import { artistsSaga } from "./fetchArtists/saga";
import { songsByAlbumSaga } from "./fetchSongsByAlbum/saga";
import { songsByArtistSaga } from "./fetchSongsByArtist/saga";
import { songsSaga } from "./fetchSongs/saga";
import { playAlbumSaga } from "./playThisAlbum/saga";

export function* rootSaga(services = {}) {
  yield fork(albumsSaga);
  yield fork(artistsSaga);
  yield fork(songsByAlbumSaga);
  yield fork(songsByArtistSaga);
  yield fork(songsSaga);
  yield fork(playAlbumSaga);
}
