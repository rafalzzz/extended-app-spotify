import React, { useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  songsList,
  songsListLength,
  isLoading,
} from "../../../../store/fetchSongs/selectors";

import { favSongsList } from "../../../../store/favSongs/selectors";

import {
  currentSong,
  currentIndex,
  NowPlayedSong,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";

import {
  addSongToFav,
  deleteSongFromFav,
} from "../../../../store/favSongs/actions";

import { setCategory, setSong } from "../../../../store/items/actions";

import {
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore,
} from "../../../../helpers/FireStoreData";

import { SearchListLayout } from "./layout";

import { Song } from "../../../../store/models";

import { AppDispatch } from "../../../../store";

export const SearchList = memo(() => {
  // Selectors

  const songs: Song[] = useSelector(songsList);
  const favList: Song[] = useSelector(favSongsList);
  const currentSongName: Song = useSelector(currentSong);
  const NowIsPlaying: Song = useSelector(NowPlayedSong);
  const playOrNot: boolean = useSelector(playRX);

  const loading: boolean = useSelector(isLoading);
  const arrLength: number = useSelector(songsListLength);

  const currentSongIndex: number = useSelector(currentIndex);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory({ term: "playlist" }));
    dispatch(fetchSongsStarted({ term: "pop" }));
  }, []);

  // Favourite songs functions

  const handleAddSongToFav = useCallback(
    (song) => (event: React.MouseEvent) => {
      dispatch(addSongToFav({ song }));
      handleSendFavSongToFirestore(song);
    },
    []
  );

  const handleDeleteSongFromFav = useCallback(
    (song, id) => (event: React.MouseEvent) => {
      dispatch(deleteSongFromFav({ id }));
      handleDeleteFavSongFromFirestore(song);
    },
    []
  );

  // CurrentItems function

  const handleSetCurrentSong = useCallback(
    (song) => (event: React.MouseEvent) => {
      dispatch(setSong({ song }));
    },
    [currentSongIndex]
  );

  return (
    <SearchListLayout
      songs={songs}
      favList={favList}
      currentSong={currentSongName}
      NowIsPlaying={NowIsPlaying}
      playOrNot={playOrNot}
      handleAddSongToFav={handleAddSongToFav}
      handleDeleteSongFromFav={handleDeleteSongFromFav}
      handleSetSong={handleSetCurrentSong}
      loading={loading}
      arrLength={arrLength}
    />
  );
});
