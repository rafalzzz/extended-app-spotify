import React, { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  currentIndex,
  currentPlaylist,
  currentSongsArray,
} from "../../../../store/items/selectors";

import {
  playRX,
  playedRX,
  loopRX,
  shuffleRX,
} from "../../../../store/player/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  playThisSong,
  setIndex,
  playNextSong,
  playPrevSong,
  setSongsList,
} from "../../../../store/items/actions";

import {
  setPlay,
  seekTo,
  setLoop,
  setShuffle,
} from "../../../../store/player/actions";

import { PlayerButtonsLayout } from "./layout";

import { Song, Playlist } from "../../../../store/models";

export const PlayerButtons = () => {
  const currentSongsArr: Song[] = useSelector(currentSongsArray);

  const shuffleSongs: boolean = useSelector(shuffleRX);
  const playing: boolean = useSelector(playRX);
  const played: number = useSelector(playedRX);
  const loop: boolean = useSelector(loopRX);
  const songIndex: number = useSelector(currentIndex);

  const currentPlaylistSongs: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const dispatch = useDispatch();

  useEffect(() => {
    currentPlaylistSongs.map((playlist: Playlist) =>
      playlist.name === currentPlaylistName
        ? dispatch(setSongsList(playlist.songs))
        : null
    );
  }, [currentPlaylistName]);

  const handleShuffleButton = useCallback(
    (event: React.MouseEvent) => {
      shuffleSongs ? dispatch(setShuffle(false)) : dispatch(setShuffle(true));
    },
    [shuffleSongs]
  );

  const handlePreviewButton = useCallback(
    (event: React.MouseEvent) => {
      dispatch(setPlay(false));
      if (played > 0.25) {
        dispatch(seekTo(0));
      } else if (songIndex === 0) {
        let song: Song = currentSongsArr[currentSongsArr.length - 1];
        dispatch(playThisSong(song));
        dispatch(setIndex(currentSongsArr.length));
        dispatch(setPlay(true));
      } else {
        let song: Song = currentSongsArr[songIndex - 1];
        dispatch(playThisSong(song));
        dispatch(playPrevSong(1));
        dispatch(setPlay(true));
      }
    },
    [songIndex, currentSongsArr, played]
  );

  const handlePlayPause = useCallback(
    (event: React.MouseEvent) => {
      playing === true ? dispatch(setPlay(false)) : dispatch(setPlay(true));
    },
    [playing]
  );

  const handleNextButton = useCallback(
    (event: React.MouseEvent) => {
      if (shuffleSongs === true) {
        let index = Math.floor(
          1 + (Math.random() * currentSongsArr.length - 1)
        );
        let song = currentSongsArr[index - 1];
        dispatch(playThisSong(song));
        dispatch(setIndex(index));
        dispatch(setPlay(true));
      } else {
        if (songIndex === currentSongsArr.length - 1) {
          let song = currentSongsArr[0];
          dispatch(playThisSong(song));
          dispatch(setIndex(1));
          dispatch(setPlay(true));
        } else {
          let song = currentSongsArr[songIndex + 1];
          dispatch(playThisSong(song));
          dispatch(playNextSong(1));
          dispatch(setPlay(true));
        }
      }
    },
    [songIndex, shuffleSongs, currentSongsArr, played]
  );

  const handleToggleLoop = useCallback(
    (event: React.MouseEvent) => {
      loop === true ? dispatch(setLoop(false)) : dispatch(setLoop(true));
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
