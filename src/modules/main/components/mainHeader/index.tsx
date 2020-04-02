import React, { useState, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { MainHeaderLayout } from "./layout";

import {
  currentSong,
  currentPlaylist
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import { handlePlayOrStop } from "../../../../store/player/actions";

import {
  addSongToPlaylist,
  deleteSongFromPlaylist,
  deletePlaylist
} from "../../../../store/playlists/actions";

import {
  handleAddSongToPlaylistOnFirestore,
  handleDeleteSongFromPlaylistOnFirestore,
  handleDeletePlaylistFromFirestore
} from "../../../../helpers/FireStoreData";

import { Song } from "../../../../store/models";

import { AppDispatch } from "../../../../store/index";

export const MainHeader = memo(() => {
  const [favListIsOpen, setFavListIsOpen] = useState<boolean>(false);
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState<boolean>(false);

  const currentPlaylistName: string = useSelector(currentPlaylist);
  const currentSongName: Song = useSelector(currentSong);
  const playOrNot: boolean = useSelector(playRX);

  const dispatch: AppDispatch = useDispatch();

  // Redirect to FavList function

  let history = useHistory();

  const handleOpenFavList = useCallback((event: MouseEvent): void => {
    history.push("/user/favourite-list");
    setFavListIsOpen(true);
  }, []);

  const handleCloseFavList = useCallback((event: MouseEvent): void => {
    history.push("/user/main");
    setFavListIsOpen(false);
  }, []);

  // PlayButton function

  const handlePlayPause = useCallback(
    (event: MouseEvent): void => {
      playOrNot
        ? dispatch(handlePlayOrStop({ play: false }))
        : dispatch(handlePlayOrStop({ play: true }));
    },
    [playOrNot]
  );

  // Open/Close more

  const handleMoreOptions = useCallback(
    (event: MouseEvent) => {
      moreOptionsIsOpen
        ? setMoreOptionsIsOpen(false)
        : setMoreOptionsIsOpen(true);
    },
    [moreOptionsIsOpen]
  );

  // Playlists functions

  const handleAddSongToPlaylist = useCallback(
    (playlist: string, song: Song) => (event: MouseEvent) => {
      dispatch(addSongToPlaylist({ playlistName: playlist, song: song }));
      handleAddSongToPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeleteSongFromPlaylist = useCallback(
    (playlist: string, song: Song) => (event: MouseEvent) => {
      dispatch(deleteSongFromPlaylist({ playlistName: playlist, song: song }));
      handleDeleteSongFromPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeletePlaylist = useCallback(
    (name: string) => (event: MouseEvent) => {
      dispatch(deletePlaylist({ name }));
      handleDeletePlaylistFromFirestore(name);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  return (
    <MainHeaderLayout
      favListIsOpen={favListIsOpen}
      handleOpenFavList={handleOpenFavList}
      handleCloseFavList={handleCloseFavList}
      moreOptionsIsOpen={moreOptionsIsOpen}
      handleMoreOptions={handleMoreOptions}
      currentSong={currentSongName}
      currentPlaylistName={currentPlaylistName}
      playOrNot={playOrNot}
      handlePlayPause={handlePlayPause}
      handleAddSongToPlaylist={handleAddSongToPlaylist}
      handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
      handleDeletePlaylist={handleDeletePlaylist}
    />
  );
});
