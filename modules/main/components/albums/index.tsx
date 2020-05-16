import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { albumsList } from "../../../../store/fetchAlbums/selectors";

import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";

import { playAlbum } from "../../../../store/playThisAlbum/actions";

import { setAlbum } from "../../../../store/items/actions";

import { AlbumsLayout } from "./layout";
import { Album } from "../../../../store/models";

export const Albums = () => {
  const albums: Album[] = useSelector(albumsList);

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
