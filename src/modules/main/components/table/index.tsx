import React, { useState, useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSong } from "../../../../store/items/actions";

import { favSongsList } from "../../../../store/favSongs/selectors";

import { setSongsList } from "../../../../store/items/actions";

import {
  currentSong,
  currentIndex,
  NowPlayedSong,
  currentCategory,
  showOverflow,
  currentPlaylist,
  currentSongsArray,
} from "../../../../store/items/selectors";

import { playRX } from "../../../../store/player/selectors";

import {
  addSongToFav,
  deleteSongFromFav,
} from "../../../../store/favSongs/actions";

import {
  addSongToPlaylist,
  deleteSongFromPlaylist,
} from "../../../../store/playlists/actions";

import {
  songsListByArtist,
  songsListByArtistIsLoading,
  songsListByArtistLength,
} from "../../../../store/fetchSongsByArtist/selectors";

import {
  songsListByAlbum,
  songsListByAlbumIsLoading,
  songsListByAlbumLength,
} from "../../../../store/fetchSongsByAlbum/selectors";

import {
  songsList,
  songsListLength,
  isLoading,
} from "../../../../store/fetchSongs/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  handleAddSongToPlaylistOnFirestore,
  handleDeleteSongFromPlaylistOnFirestore,
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore,
} from "../../../../helpers/FireStoreData";

import { TableContainer } from "./components/table.styled";
import { TableHeader } from "./components/tableHeader";
import { TableElement } from "./layout";
import { Error } from "./components/error";
import { Loading } from "./components/loading";

import { Song, Playlist } from "../../../../store/models";

export const Table = memo(() => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [nowIsLoading, setNowIsLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const songsArr = useSelector(currentSongsArray);

  const songsByArtist = useSelector(songsListByArtist);
  const songsByAlbum = useSelector(songsListByAlbum);
  const songsByTerm = useSelector(songsList);
  const favList: Song[] = useSelector(favSongsList);
  const playlistsList: Playlist[] = useSelector(playlists);

  const currentPlaylistName: string = useSelector(currentPlaylist);
  const currentSongName: Song = useSelector(currentSong);
  const currentSongIndex: number = useSelector(currentIndex);

  const NowIsPlaying: Song = useSelector(NowPlayedSong);
  const playOrNot: boolean = useSelector(playRX);
  const category: string = useSelector(currentCategory);
  const isOverflow: boolean = useSelector(showOverflow);

  const loadingSongsByArtist: boolean = useSelector(songsListByArtistIsLoading);
  const loadingSongsByAlbum: boolean = useSelector(songsListByAlbumIsLoading);
  const loadingSongsByTerm: boolean = useSelector(isLoading);

  const songsByArtistLength: number = useSelector(songsListByArtistLength);
  const songsByAlbumLength: number = useSelector(songsListByAlbumLength);
  const songsByTermLength: number = useSelector(songsListLength);

  const dispatch = useDispatch();

  console.log("PlaylistsList", playlistsList);
  console.log("currentCategory", category);
  console.log("currentSongArrRedux", songsArr);

  const handleAddSongToFav = useCallback((song: Song) => {
    dispatch(addSongToFav(song));
    handleSendFavSongToFirestore(song);
  }, []);

  const handleDeleteSongFromFav = useCallback((song: Song) => {
    dispatch(deleteSongFromFav(song));
    handleDeleteFavSongFromFirestore(song);
  }, []);

  const handleSetSong = useCallback(
    (song: Song) => (event: React.MouseEvent) => {
      dispatch(setSong(song));
    },
    [currentSongIndex]
  );

  const handleAddSongToPlaylist = useCallback(
    (playlist: string, song: Song) => (event: React.MouseEvent) => {
      dispatch(addSongToPlaylist(playlist, song));
      handleAddSongToPlaylistOnFirestore(playlist, song);
    },
    []
  );

  const handleDeleteSongFromPlaylist = useCallback(
    (playlist: string, song: Song) => (event: React.MouseEvent) => {
      dispatch(deleteSongFromPlaylist(playlist, song));
      handleDeleteSongFromPlaylistOnFirestore(playlist, song);
    },
    []
  );

  useEffect(() => {
    if (category === "songsByArtist") {
      setNowIsLoading(loadingSongsByArtist);
    } else if (category === "songsByAlbum") {
      setNowIsLoading(loadingSongsByAlbum);
    } else if (category === "songsByTerm") {
      setNowIsLoading(loadingSongsByTerm);
    }
  }, [
    songsByArtist,
    songsByAlbum,
    songsByTerm,
    loadingSongsByArtist,
    loadingSongsByAlbum,
    loadingSongsByTerm,
    category,
  ]);

  useEffect(() => {
    if (songsByArtistLength === 0) {
      setNotFound(true);
    } else if (songsByAlbumLength === 0) {
      setNotFound(true);
    } else if (songsByTermLength === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [
    songsByArtist,
    songsByAlbum,
    songsByTerm,
    songsByArtistLength,
    songsByAlbumLength,
    songsByTermLength,
    loadingSongsByArtist,
    loadingSongsByAlbum,
    loadingSongsByTerm,
    category,
  ]);

  useEffect(() => {
    if (category === "songsByArtist") {
      setSongs(songsByArtist);
    } else if (category === "songsByAlbum") {
      setSongs(songsByAlbum);
    } else if (category === "songsByTerm") {
      setSongs(songsByTerm);
    } else if (category === "favList") {
      setSongs(favList);
    } else if (category === "playlist") {
      playlistsList.map((playlist: Playlist) =>
        currentPlaylistName === playlist.name ? setSongs(playlist.songs) : null
      );
    }
  }, [
    songsByArtist,
    songsByAlbum,
    songsByTerm,
    favList,
    playlistsList,
    currentPlaylistName,
    category,
  ]);

  const setSongsArr = useCallback(() => {
    if (category === "songsByArtist") {
      dispatch(setSongsList(songsByArtist));
    } else if (category === "songsByAlbum") {
      dispatch(setSongsList(songsByAlbum));
    } else if (category === "songsByTerm") {
      dispatch(setSongsList(songsByTerm));
    } else if (category === "favList") {
      dispatch(setSongsList(favList));
    } else if (category === "playlist") {
      playlistsList.map((playlist: Playlist) =>
        currentPlaylistName === playlist.name
          ? dispatch(setSongsList(playlist.songs))
          : null
      );
    }
  }, [
    songsByArtist,
    songsByAlbum,
    songsByTerm,
    favList,
    playlistsList,
    currentPlaylistName,
    category,
    songsArr,
  ]);

  return (
    <TableContainer>
      <div
        className="table"
        style={{ overflowY: isOverflow ? "hidden" : "scroll" }}
      >
        {nowIsLoading && <Loading />}
        {notFound && <Error />}
        {notFound === false && nowIsLoading === false && <TableHeader />}
        {songs &&
          songs.map((song, i = 0) => (
            <div key={i++}>
              <TableElement
                id={i++}
                key={i++}
                song={song}
                favList={favList}
                playlistsList={playlistsList}
                currentSong={currentSongName}
                NowIsPlaying={NowIsPlaying}
                playOrNot={playOrNot}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetSong={handleSetSong}
                handleAddSongToPlaylist={handleAddSongToPlaylist}
                handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
                setSongsArr={setSongsArr}
              />
            </div>
          ))}
        <div style={{ height: "17px" }}></div>
      </div>
    </TableContainer>
  );
});
