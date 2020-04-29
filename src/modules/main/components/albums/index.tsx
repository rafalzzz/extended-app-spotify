import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { albumsList } from "../../../../store/fetchAlbums/selectors";

import { songsListByAlbum } from "../../../../store/fetchSongsByAlbum/selectors";

import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";
import { fetchSongsByAlbum } from "../../../../store/fetchSongsByAlbum/actions";

import { playAlbum } from "../../../../store/playThisAlbum/actions";

import { playThisSong, setAlbum } from "../../../../store/items/actions";

import { setPlay } from "../../../../store/player/actions";

import { AlbumsLayout } from "./layout";
import { Album } from "../../../../store/models";

export const Albums = () => {
  const albums: Album[] = useSelector(albumsList);

  const songsByAlbumArr = useSelector(songsListByAlbum);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleFetchTracksByAlbumName = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(setAlbum(term));
      dispatch(fetchSongsStarted(term, 100));
      history.push(`/user/search/album/${term}/tracks`);
    },
    []
  );

  const handlePlayThisAlbumNow = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      /* dispatch(fetchSongsByAlbum(term, limit));
      dispatch(setPlay(false));
      dispatch(playThisSong(songsByAlbumArr[0]));
      dispatch(setAlbum(term));
      dispatch(setPlay(true));
      history.push(`/user/search/album/${term}/tracks`); */
      dispatch(playAlbum(term, limit));
    },
    []
  );

  return (
    <AlbumsLayout
      albums={albums}
      handleFetchTracksByAlbumName={handleFetchTracksByAlbumName}
      handlePlayThisAlbumNow={handlePlayThisAlbumNow}
    />
  );
};
