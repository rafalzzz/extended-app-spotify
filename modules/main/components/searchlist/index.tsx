import React, { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { currentTerm } from "../../../../store/items/selectors";

import { artistsArrayLength } from "../../../../store/fetchArtists/selectors";

import { albumsArrayLength } from "../../../../store/fetchAlbums/selectors";

import {
  songsList,
  songsListLength,
} from "../../../../store/fetchSongs/selectors";

import { fetchArtistsStarted } from "../../../../store/fetchArtists/actions";
import { fetchAlbumsStarted } from "../../../../store/fetchAlbums/actions";
import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";
import { fetchSongsByArtistName } from "../../../../store/fetchSongsByArtist/actions";
import { fetchSongsByAlbumName } from "../../../../store/fetchSongsByAlbum/actions";

import {
  setSong,
  setIndex,
  playThisSong,
  setArtist,
  setAlbum,
  setSongsList,
} from "../../../../store/items/actions";

import { setPlay } from "../../../../store/player/actions";

import { playAlbum } from "../../../../store/playThisAlbum/actions";

import { SearchLayout } from "./layout";
import { Song } from "../../../../store/models";

export const Search = () => {
  const term = useSelector(currentTerm);

  const songsByTermArr = useSelector(songsList);

  const artistsArrLength: number = useSelector(artistsArrayLength);
  const albumsArrLength: number = useSelector(albumsArrayLength);
  const songsArrLength: number = useSelector(songsListLength);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchArtistsStarted(term));
    dispatch(fetchAlbumsStarted(term, 8));
    dispatch(fetchSongsStarted(term, 8));
  }, []);

  const handleFetchMoreAlbums = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(fetchAlbumsStarted(term, 100));
      history.push("/user/search/albums");
    },
    []
  );

  const handleFetchMoreTracks = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(fetchSongsStarted(term, 100));
      history.push("/user/search/tracks");
    },
    []
  );

  const handleFetchTracksByArtistName = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(setArtist(term));
      dispatch(fetchSongsByArtistName(term, 100));
      history.push(`/user/search/artist/${term}/tracks`);
    },
    []
  );

  const handleFetchTracksByAlbumName = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(setAlbum(term));
      dispatch(fetchSongsByAlbumName(term, limit));
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

  const handleSetCurrentSong = useCallback(
    (song: Song, id: number) => (event: React.MouseEvent) => {
      dispatch(setSong(song));
      dispatch(setIndex(id + 1));
      history.push("/user/search/tracks");
    },
    []
  );

  const handlePlayThisTrackNow = useCallback(
    (song: Song, id: number) => (event: React.MouseEvent) => {
      dispatch(setPlay(false));
      dispatch(setSongsList(songsByTermArr));
      dispatch(playThisSong(song));
      dispatch(setPlay(true));
      history.push("/user/search/tracks");
    },
    [songsByTermArr]
  );

  return (
    <SearchLayout
      term={term}
      handleFetchMoreAlbums={handleFetchMoreAlbums}
      handleFetchMoreTracks={handleFetchMoreTracks}
      handleFetchTracksByArtistName={handleFetchTracksByArtistName}
      handleFetchTracksByAlbumName={handleFetchTracksByAlbumName}
      handlePlayThisAlbumNow={handlePlayThisAlbumNow}
      artistsArrLength={artistsArrLength}
      albumsArrLength={albumsArrLength}
      songsArrLength={songsArrLength}
      handleSetCurrentSong={handleSetCurrentSong}
      handlePlayThisTrackNow={handlePlayThisTrackNow}
    />
  );
};
