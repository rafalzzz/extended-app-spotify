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
  shuffleRX,
} from "../../../../store/player/selectors";

import {
  setPlay,
  setPlayed,
  setDuration,
} from "../../../../store/player/actions";

import { currentSongsArray } from "../../../../store/items/selectors";

import {
  currentIndex,
  currentPlaylist,
  NowPlayedSong,
} from "../../../../store/items/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  playThisSong,
  setIndex,
  playNextSong,
} from "../../../../store/items/actions";

import { Song, Playlist } from "../../../../store/models";

type RefProps = {
  current: any;
};

export const ReactMusicPlayer = () => {
  const shuffleSongs: boolean = useSelector(shuffleRX);
  const songIndex: number = useSelector(currentIndex);

  const currentSongsArr: Song[] = useSelector(currentSongsArray);

  const currentPlaylistSongs: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState<
    Song[]
  >([]);

  const playing: boolean = useSelector(playRX);
  const currentPlayedSong: Song = useSelector(NowPlayedSong);
  let url: string = currentPlayedSong.previewUrl;
  const pip: boolean = useSelector(pipRX);
  const volume: number = useSelector(volumeRX);
  const muted: boolean = useSelector(mutedRX);
  const loop: boolean = useSelector(loopRX);
  const seekTo: number = useSelector(seekToRX);

  const dispatch = useDispatch();

  const handlePlay = useCallback((): void => {
    dispatch(setPlay(true));
  }, []);

  const handlePause = useCallback((): void => {
    dispatch(setPlay(false));
  }, []);

  const handleEnded = useCallback(() => {
    if (shuffleSongs === true) {
      let index = Math.floor(1 + Math.random() * currentSongsArr.length - 1);
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
        dispatch(setPlay(false));
        let song = currentSongsArr[songIndex + 1];
        dispatch(playThisSong(song));
        dispatch(playNextSong(1));
        dispatch(setPlay(true));
      }
    }
  }, [songIndex, shuffleSongs, currentSongsArr]);

  const ref: RefProps = useRef(null);

  const handleProgress = (value: any) => {
    let playedValue = parseFloat(value.played);
    dispatch(setPlayed(playedValue));
    console.log(songIndex);
  };

  const handleDuration = (duration: number) => {
    dispatch(setDuration(duration));
  };

  useEffect(() => {
    ref.current.seekTo(seekTo);
    dispatch(setPlayed(seekTo));
  }, [seekTo]);

  useEffect(() => {
    currentPlaylistSongs.map((playlist) =>
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
      onSeek={(e) => console.log("onSeek", e)}
      onStart={() => console.log("onStart")}
      onEnded={handleEnded}
      onError={(e) => console.log("onError", e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
};
