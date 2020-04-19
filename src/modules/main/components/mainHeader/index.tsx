import React, { useState, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { MainHeaderLayout } from "./layout";

import {
  currentSong,
  currentCategory,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import { setPlay } from "../../../../store/player/actions";

import { Song } from "../../../../store/models";

export const MainHeader = memo(() => {
  const currentSongName: Song | undefined = useSelector(currentSong);
  const category: string = useSelector(currentCategory);
  const playOrNot: boolean = useSelector(playRX);

  const dispatch = useDispatch();

  // Redirect to FavList function

  let history = useHistory();

  const handleOpenFavList = useCallback((event: React.MouseEvent): void => {
    history.push("/user/favourite-list");
  }, []);

  const handleCloseFavList = useCallback((event: React.MouseEvent): void => {
    history.push("/user/search");
  }, []);

  // PlayButton function

  const handlePlayPause = useCallback(
    (event: React.MouseEvent): void => {
      playOrNot ? dispatch(setPlay(false)) : dispatch(setPlay(true));
    },
    [playOrNot]
  );

  return (
    <MainHeaderLayout
      category={category}
      handleOpenFavList={handleOpenFavList}
      handleCloseFavList={handleCloseFavList}
      currentSong={currentSongName}
      playOrNot={playOrNot}
      handlePlayPause={handlePlayPause}
    />
  );
});
