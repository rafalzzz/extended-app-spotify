import React, { useState, useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { favSongsList } from "../../../../store/favSongs/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  currentSong,
  currentIndex,
  currentPlaylist,
  NowPlayedSong,
  showOverflow,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import {
  addSongToFav,
  deleteSongFromFav,
} from "../../../../store/favSongs/actions";

import { setCategory, setSong } from "../../../../store/items/actions";

import {
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore,
} from "../../../../helpers/FireStoreData";

import { PlaylistLayout } from "./layout";

import { Song, Playlist } from "../../../../store/models";

export const Playlists = memo(() => {
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState<
    Song[]
  >([]);

  // Selectors

  const favList: Song[] = useSelector(favSongsList);
  const currentSongName: Song = useSelector(currentSong);
  const NowIsPlaying: Song = useSelector(NowPlayedSong);
  const playOrNot: boolean = useSelector(playRX);
  const overflow: boolean = useSelector(showOverflow);

  const currentPlaylistSongs: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string | undefined = useSelector(currentPlaylist);

  const currentSongIndex: number | undefined = useSelector(currentIndex);

  const dispatch = useDispatch();

  // Download songs from current playlist

  const returnCurrentPlaylistSongs = () => {
    currentPlaylistSongs.map((playlist: Playlist) =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
    console.log("asdasdsa", currentPlaylistSongs);
  };

  useEffect(() => {
    dispatch(setCategory("playlist"));
    returnCurrentPlaylistSongs();
  }, [currentPlaylistName, currentPlaylistSongs]);

  useEffect(() => {
    console.log("name", currentPlaylistName);
  }, [currentPlaylistName]);

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
    (song) => (event: React.MouseEvent) => {
      dispatch(setSong(song));
    },
    [currentSongIndex]
  );

  return (
    <PlaylistLayout
      songs={currentPlaylistSongsList}
      favList={favList}
      currentSong={currentSongName}
      NowIsPlaying={NowIsPlaying}
      playOrNot={playOrNot}
      handleAddSongToFav={handleAddSongToFav}
      handleDeleteSongFromFav={handleDeleteSongFromFav}
      handleSetSong={handleSetSong}
      overflow={overflow}
    />
  );
});
