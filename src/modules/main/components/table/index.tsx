import React, { useState, useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSong } from "../../../../store/items/actions";

import { favSongsList } from "../../../../store/favSongs/selectors";

import {
  currentSong,
  currentIndex,
  NowPlayedSong,
  currentCategory,
  showOverflow,
  currentPlaylist,
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

  const searchSongs = useSelector(songsList);
  const favList: Song[] = useSelector(favSongsList);
  const playlistsList: Playlist[] = useSelector(playlists);

  const currentPlaylistName: string = useSelector(currentPlaylist);
  const currentSongName: Song = useSelector(currentSong);
  const currentSongIndex: number = useSelector(currentIndex);

  const NowIsPlaying: Song = useSelector(NowPlayedSong);
  const playOrNot: boolean = useSelector(playRX);
  const category: string = useSelector(currentCategory);
  const isOverflow: boolean = useSelector(showOverflow);

  const loading: boolean = useSelector(isLoading);
  const arrLength: number = useSelector(songsListLength);

  const dispatch = useDispatch();

  // FavSongs functions

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

  // Add or delete music from playlist

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

  // Songs dependent from category
  useEffect(() => {
    if (category === "search") {
      setSongs(searchSongs);
    } else if (category === "favList") {
      setSongs(favList);
    } else if (category === "playlist") {
      playlistsList.map((playlist: Playlist) =>
        currentPlaylistName === playlist.name ? setSongs(playlist.songs) : null
      );
    }
  }, [category, searchSongs, favList, playlistsList, currentPlaylistName]);

  return (
    <TableContainer>
      <div
        className="table"
        style={{ overflowY: isOverflow ? "hidden" : "scroll" }}
      >
        {loading && <Loading />}
        {arrLength === 0 && <Error />}
        {arrLength > 0 && <TableHeader />}
        {songs &&
          songs.map((song, i = 0) => (
            <div key={i++}>
              <TableElement
                id={i++}
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
              />
            </div>
          ))}
        <div style={{ height: "17px" }}></div>
      </div>
    </TableContainer>
  );
});
