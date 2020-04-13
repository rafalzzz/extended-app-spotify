import React, { useState, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { MainHeaderLayout } from "./layout";

import {
  currentSong,
  currentPlaylist,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import { setPlay } from "../../../../store/player/actions";

import {
  addSongToPlaylist,
  deleteSongFromPlaylist,
  deletePlaylist,
} from "../../../../store/playlists/actions";

import {
  handleAddSongToPlaylistOnFirestore,
  handleDeleteSongFromPlaylistOnFirestore,
  handleDeletePlaylistFromFirestore,
} from "../../../../helpers/FireStoreData";

import { Song } from "../../../../store/models";

export const MainHeader = memo(() => {
  const [favListIsOpen, setFavListIsOpen] = useState<boolean>(false);
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState<boolean>(false);

  const currentPlaylistName: string = useSelector(currentPlaylist);
  const currentSongName: Song | undefined = useSelector(currentSong);
  const playOrNot: boolean = useSelector(playRX);

  const dispatch = useDispatch();

  // Redirect to FavList function

  let history = useHistory();

  const handleOpenFavList = useCallback((event: React.MouseEvent): void => {
    history.push("/user/favourite-list");
    setFavListIsOpen(true);
  }, []);

  const handleCloseFavList = useCallback((event: React.MouseEvent): void => {
    history.push("/user/main");
    setFavListIsOpen(false);
  }, []);

  // PlayButton function

  const handlePlayPause = useCallback(
    (event: React.MouseEvent): void => {
      playOrNot ? dispatch(setPlay(false)) : dispatch(setPlay(true));
    },
    [playOrNot]
  );

  // Open/Close more

  const handleMoreOptions = useCallback(
    (event: React.MouseEvent) => {
      moreOptionsIsOpen
        ? setMoreOptionsIsOpen(false)
        : setMoreOptionsIsOpen(true);
    },
    [moreOptionsIsOpen]
  );

  // Playlists functions

  const handleAddSongToPlaylist = useCallback(
    (playlist: string, song: Song) => (event: React.MouseEvent) => {
      dispatch(addSongToPlaylist(playlist, song));
      handleAddSongToPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeleteSongFromPlaylist = useCallback(
    (playlist: string, song: Song) => (event: React.MouseEvent) => {
      dispatch(deleteSongFromPlaylist(playlist, song));
      handleDeleteSongFromPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeletePlaylist = useCallback(
    (name: string) => (event: React.MouseEvent) => {
      dispatch(deletePlaylist({ name: name }));
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
