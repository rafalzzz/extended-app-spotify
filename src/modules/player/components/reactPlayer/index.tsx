import React, { useState, useCallback, useEffect, useRef } from "react";

import ReactPlayer from "react-player";

import { useSelector, useDispatch } from "react-redux";

import {
  playRX,
  pipRX,
  volumeRX,
  mutedRX,
  loopRX,
  seekToRX,
  shuffleRX
} from "../../../../store/player/selectors";

import {
  handlePlayOrStop,
  setPlayed,
  setDuration
} from "../../../../store/player/actions";

import {
  currentIndex,
  currentCategory,
  currentPlaylist,
  NowPlayedSong
} from "../../../../store/items/selectors";

import {
  songsList,
  songsListLength
} from "../../../../store/fetchSongs/selectors";

import { favSongsList } from "../../../../store/favSongs/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  handlePlayThisSong,
  setIndex,
  handlePlayNextSong
} from "../../../../store/items/actions";

import { Song, Playlist } from "../../../../store/models";

import { AppDispatch } from "../../../../store";

type RefProps = {
  current: any;
};

export const ReactMusicPlayer = () => {
  // Functions consts
  const shuffleSongs: boolean = useSelector(shuffleRX);
  const songIndex: number = useSelector(currentIndex);
  const category: string = useSelector(currentCategory);

  const searchSongsArr: Song[] = useSelector(songsList);
  const searchSongsArrLength: number = useSelector(songsListLength);
  const favSongArr: Song[] = useSelector(favSongsList);
  const currentPlaylistSongs: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState<
    Song[]
  >([]);

  // Player consts
  const playing: boolean = useSelector(playRX);
  const currentPlayedSong: Song = useSelector(NowPlayedSong);
  let url: string = currentPlayedSong.previewUrl;
  const pip: boolean = useSelector(pipRX);
  const volume: number = useSelector(volumeRX);
  const muted: boolean = useSelector(mutedRX);
  const loop: boolean = useSelector(loopRX);
  const seekTo: number = useSelector(seekToRX);

  const dispatch: AppDispatch = useDispatch();

  // ReactPlayer functions

  const handlePlay = useCallback((event): void => {
    dispatch(handlePlayOrStop({ play: true }));
  }, []);

  const handlePause = useCallback((event): void => {
    dispatch(handlePlayOrStop({ play: false }));
  }, []);

  const handleEnded = useCallback(() => {
    if (shuffleSongs === true) {
      if (category === "search") {
        let index = Math.floor(1 + (Math.random() * searchSongsArrLength - 1));
        let song = searchSongsArr[index - 1];
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: index }));
      } else if (category === "favList") {
        let index = Math.floor(1 + (Math.random() * favSongArr.length - 1));
        let song = favSongArr[index - 1].song;
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: index }));
      } else if (category === "playlist") {
        let index = Math.floor(
          1 + (Math.random() * currentPlaylistSongsList.length - 1)
        );
        let song = currentPlaylistSongsList[index - 1];
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: index }));
      }
    } else if (shuffleSongs !== true && category === "search") {
      if (songIndex < searchSongsArrLength - 1) {
        let song = searchSongsArr[songIndex + 1];
        dispatch(handlePlayThisSong({ song }));
        dispatch(handlePlayNextSong({ value: 1 }));
      } else {
        let song = searchSongsArr[0];
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: 0 }));
      }
    } else if (shuffleSongs !== true && category === "favList") {
      if (songIndex < favSongArr.length - 1) {
        let song = favSongArr[songIndex + 1].song;
        dispatch(handlePlayThisSong({ song }));
        dispatch(handlePlayNextSong({ value: 1 }));
      } else {
        let song = favSongArr[0];
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: 0 }));
      }
    } else if (shuffleSongs !== true && category === "playlist") {
      if (songIndex < currentPlaylistSongsList.length - 1) {
        let song = currentPlaylistSongsList[songIndex + 1];
        dispatch(handlePlayThisSong({ song }));
        dispatch(handlePlayNextSong({ value: 1 }));
      } else {
        let song = currentPlaylistSongsList[0];
        dispatch(handlePlayThisSong({ song }));
        dispatch(setIndex({ id: 0 }));
      }
    }
    dispatch(handlePlayOrStop({ play: true }));
  }, [
    songIndex,
    searchSongsArr,
    favSongArr,
    currentPlaylistSongsList,
    category,
    currentPlayedSong,
    shuffleSongs
  ]);

  const ref: RefProps = useRef(null);

  const handleProgress = (value: any) => {
    console.log("obecnyIndex", songIndex);
    let playedValue = parseFloat(value.played);
    dispatch(setPlayed({ played: playedValue }));
  };

  const handleDuration = (duration: number) => {
    dispatch(setDuration({ duration: duration }));
  };

  // Skip song to optional second

  useEffect(() => {
    ref.current.seekTo(seekTo);
    dispatch(setPlayed({ played: seekTo }));
  }, [seekTo]);

  // Get current playlist songs

  useEffect(() => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
    console.log("playlistArr", currentPlaylistSongsList);
  }, [currentPlaylistName]);

  return (
    <ReactPlayer
      ref={ref}
      className="react-player"
      width="0px"
      height="0px"
      url={url}
      pip={pip}
      playing={playing}
      loop={loop}
      volume={volume}
      muted={muted}
      onReady={() => console.log("onReady")}
      onPlay={handlePlay}
      onPause={handlePause}
      onBuffer={() => console.log("onBuffer")}
      onSeek={e => console.log("onSeek", e)}
      onStart={() => console.log("onStart")}
      onEnded={handleEnded}
      onError={e => console.log("onError", e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
};
