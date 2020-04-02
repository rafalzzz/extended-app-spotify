import React from "react";

import { useSelector } from "react-redux";

import { NowPlayedSong } from "../../../../store/items/selectors";

import { SongInfoLayout } from "./layout";

import { Song } from "../../../../store/models";

export const SongInfo = () => {
  const currentPlayedSong: Song = useSelector(NowPlayedSong);

  return <SongInfoLayout currentPlayedSong={currentPlayedSong} />;
};
