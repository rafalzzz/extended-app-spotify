import React, { useState, useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  currentCategory,
  currentIndex,
  currentPlaylist,
  NowPlayedSong,
} from "../../../../store/items/selectors";

import { playRX, loopRX, shuffleRX } from "../../../../store/player/selectors";

import {
  songsList,
  songsListLength,
} from "../../../../store/fetchSongs/selectors";
import { favSongsList } from "../../../../store/favSongs/selectors";
import { playlists } from "../../../../store/playlists/selectors";

import {
  playThisSong,
  setIndex,
  playNextSong,
  playPrevSong,
} from "../../../../store/items/actions";

import { setPlay, setLoop, setShuffle } from "../../../../store/player/actions";

import { PlayerButtonsLayout } from "./layout";

import { Song, Playlist } from "../../../../store/models";

import { AppDispatch } from "../../../../store";

export const PlayerButtons = () => {
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState<
    Song[]
  >([]);

  const shuffleSongs: boolean = useSelector(shuffleRX);
  const playing: boolean = useSelector(playRX);
  const loop: boolean = useSelector(loopRX);
  const songIndex: number = useSelector(currentIndex);
  const currentPlayedSong: Song = useSelector(NowPlayedSong);

  const category: string = useSelector(currentCategory);
  const searchSongsArr: Song[] = useSelector(songsList);
  const searchSongsArrLength: number = useSelector(songsListLength);
  const favSongArr: Song[] = useSelector(favSongsList);
  const currentPlaylistSongs: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    currentPlaylistSongs.map((playlist: Playlist) =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
  }, [currentPlaylistName]);

  const handleShuffleButton = useCallback(
    (event: React.MouseEvent) => {
      shuffleSongs
        ? dispatch(setShuffle({ shuffle: false }))
        : dispatch(setShuffle({ shuffle: true }));
    },
    [shuffleSongs]
  );

  const handlePreviewButton = useCallback(
    (event: React.MouseEvent) => {
      if (category === "search") {
        if (songIndex === 0) {
          let song = searchSongsArr[searchSongsArrLength - 1];
          let index = searchSongsArrLength;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex > searchSongsArrLength - 1) {
          let song = searchSongsArr[searchSongsArrLength - 1];
          let index = searchSongsArrLength;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex === searchSongsArrLength - 1) {
          let song = searchSongsArr[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        } else {
          let song = searchSongsArr[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        }
      } else if (category === "favList") {
        if (songIndex === 0) {
          let song = favSongArr[favSongArr.length - 1];
          let index = favSongArr.length;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex > favSongArr.length - 1) {
          let song = favSongArr[favSongArr.length - 1];
          let index = favSongArr.length;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex === favSongArr.length - 1) {
          let song = favSongArr[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        } else {
          let song = favSongArr[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        }
      } else if (category === "playlist") {
        if (songIndex === 0) {
          let song =
            currentPlaylistSongsList[currentPlaylistSongsList.length - 1];
          let index = currentPlaylistSongsList.length;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex > currentPlaylistSongsList.length - 1) {
          let song =
            currentPlaylistSongsList[currentPlaylistSongsList.length - 1];
          let index = currentPlaylistSongsList.length;
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (songIndex === currentPlaylistSongsList.length - 1) {
          let song = currentPlaylistSongsList[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        } else {
          let song = currentPlaylistSongsList[songIndex - 1];
          dispatch(playThisSong({ song }));
          dispatch(playPrevSong({ value: 1 }));
        }
      }
    },
    [
      songIndex,
      searchSongsArr,
      favSongArr,
      currentPlaylistSongsList,
      category,
      currentPlayedSong,
    ]
  );

  const handlePlayPause = useCallback(
    (event: React.MouseEvent) => {
      playing === true
        ? dispatch(setPlay({ play: false }))
        : dispatch(setPlay({ play: true }));
    },
    [playing]
  );

  const handleNextButton = useCallback(
    (event: React.MouseEvent) => {
      if (shuffleSongs === true) {
        if (category === "search") {
          let index = Math.floor(
            1 + (Math.random() * searchSongsArrLength - 1)
          );
          let song = searchSongsArr[index - 1];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (category === "favList") {
          let index = Math.floor(1 + (Math.random() * favSongArr.length - 1));
          let song = favSongArr[index - 1];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        } else if (category === "playlist") {
          let index = Math.floor(
            1 + (Math.random() * currentPlaylistSongsList.length - 1)
          );
          let song = currentPlaylistSongsList[index - 1];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: index }));
        }
      } else if (shuffleSongs === false && category === "search") {
        if (songIndex < searchSongsArrLength - 1) {
          let song = searchSongsArr[songIndex + 1];
          dispatch(playThisSong({ song }));
          dispatch(playNextSong({ value: 1 }));
        } else {
          let song = searchSongsArr[0];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: 0 }));
        }
      } else if (shuffleSongs === false && category === "favList") {
        if (songIndex < favSongArr.length - 1) {
          let song = favSongArr[songIndex + 1];
          dispatch(playThisSong({ song }));
          dispatch(playNextSong({ value: 1 }));
        } else {
          let song = favSongArr[0];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: 0 }));
        }
      } else if (shuffleSongs === false && category === "playlist") {
        if (songIndex < currentPlaylistSongsList.length - 1) {
          let song = currentPlaylistSongsList[songIndex + 1];
          dispatch(playThisSong({ song }));
          dispatch(playNextSong({ value: 1 }));
        } else {
          let song = currentPlaylistSongsList[0];
          dispatch(playThisSong({ song }));
          dispatch(setIndex({ id: 0 }));
        }
      }
    },
    [
      songIndex,
      searchSongsArr,
      favSongArr,
      currentPlaylistSongsList,
      category,
      currentPlayedSong,
      shuffleSongs,
    ]
  );

  const handleToggleLoop = useCallback(
    (event: React.MouseEvent) => {
      loop === true
        ? dispatch(setLoop({ loop: false }))
        : dispatch(setLoop({ loop: true }));
    },
    [loop]
  );

  return (
    <PlayerButtonsLayout
      handleShuffleButton={handleShuffleButton}
      shuffleSongs={shuffleSongs}
      handlePreviewButton={handlePreviewButton}
      handlePlayPause={handlePlayPause}
      playing={playing}
      handleNextButton={handleNextButton}
      handleToggleLoop={handleToggleLoop}
      loop={loop}
    />
  );
};
