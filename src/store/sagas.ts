import { all } from "redux-saga/effects";

import { songsSaga } from "./fetchSongs/saga";

export function* rootSaga(services = {}) {
  return yield all([songsSaga()]);
}
