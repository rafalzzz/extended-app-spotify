import React, { useEffect, useCallback } from "react";

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { playlists } from "../../../../store/playlists/selectors";

import {
  setPlaylist,
  setCategory,
  playThisSong,
  setIndex,
  setSongsList,
} from "../../../../store/items/actions";

import { setPlay } from "../../../../store/player/actions";

import { deletePlaylist } from "../../../../store/playlists/actions";

import { handleDeletePlaylistFromFirestore } from "../../../../helpers/FireStoreData";

import { PlaylistLayout } from "./layout";
import { Playlist } from "../../../../store/models";

export const Playlists = () => {
  const playlistsList: Playlist[] = useSelector(playlists);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(setCategory("playlist"));
  }, []);

  const handlePlayPlaylist = useCallback(
    (name: string) => (event: React.MouseEvent) => {
      dispatch(setPlaylist(name));
      playlistsList.map((playlist: Playlist) => {
        if (name === playlist.name) {
          if (playlist.songs.length !== 0) {
            dispatch(setSongsList(playlist.songs));
            dispatch(playThisSong(playlist.songs[0]));
            dispatch(setIndex(1));
            dispatch(setPlay(true));
            history.push(`/user/playlist/list/${name}`);
          } else {
            return null;
          }
        }
      });
    },
    []
  );

  const handleDeletePlaylist = useCallback(
    (name: string) => (event: React.MouseEvent) => {
      dispatch(deletePlaylist(name));
      handleDeletePlaylistFromFirestore(name);
    },
    []
  );

  return (
    <PlaylistLayout
      playlistsList={playlistsList}
      handlePlayPlaylist={handlePlayPlaylist}
      handleDeletePlaylist={handleDeletePlaylist}
    />
  );
};
