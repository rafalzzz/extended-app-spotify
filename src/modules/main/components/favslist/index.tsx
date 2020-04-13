import React, { useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { favSongsList } from "../../../../store/favSongs/selectors";

import {
  currentSong,
  currentIndex,
  NowPlayedSong,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import {
  addSongToFav,
  deleteSongFromFav,
} from "../../../../store/favSongs/actions";

import { setSong, setCategory } from "../../../../store/items/actions";

import {
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore,
} from "../../../../helpers/FireStoreData";

import { FavsListLayout } from "./layout";

import { Song } from "../../../../store/models";

export const FavsList = memo(() => {
  // Selectors
  const favList: Song[] = useSelector(favSongsList);
  const currentSongName: Song = useSelector(currentSong);
  const NowIsPlaying: Song = useSelector(NowPlayedSong);
  const playOrNot: boolean = useSelector(playRX);

  const currentSongIndex: number = useSelector(currentIndex);

  const dispatch = useDispatch();

  console.log("favListSongs", favList);

  useEffect(() => {
    dispatch(setCategory("favList"));
  }, []);

  // Favourite songs functions

  const handleAddSongToFav = useCallback((song: Song) => {
    dispatch(addSongToFav(song));
    handleSendFavSongToFirestore(song);
  }, []);

  const handleDeleteSongFromFav = useCallback((song: Song) => {
    dispatch(deleteSongFromFav(song));
    handleDeleteFavSongFromFirestore(song);
  }, []);

  // CurrentItems function

  const handleSetSong = useCallback(
    (song: Song) => (event: React.MouseEvent) => {
      dispatch(setSong(song));
    },
    [currentSongIndex]
  );

  return (
    <FavsListLayout
      favList={favList}
      currentSong={currentSongName}
      NowIsPlaying={NowIsPlaying}
      playOrNot={playOrNot}
      handleAddSongToFav={handleAddSongToFav}
      handleDeleteSongFromFav={handleDeleteSongFromFav}
      handleSetSong={handleSetSong}
    />
  );
});
