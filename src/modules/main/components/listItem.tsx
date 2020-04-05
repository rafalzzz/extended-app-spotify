import React, { useState, useEffect, useCallback } from "react";

import { Duration } from "../../../helpers/Duration";

import { setIndex, playThisSong } from "../../../store/items/actions";

import { setPlay } from "../../../store/player/actions";

import { useDispatch } from "react-redux";

import { ListItemContainer } from "./listItem.styled";

import { Song } from "../../../store/models";

import { AppDispatch } from "../../../store/index";

type ListItemProps = {
  id: number;
  song: Song;
  favList: Song[];
  currentSong: Song;
  NowIsPlaying: Song;
  playOrNot: boolean;
  handleAddSongToFav: (song: Song) => (event: React.MouseEvent) => void;
  handleDeleteSongFromFav: (
    song: Song,
    songId: string
  ) => (event: React.MouseEvent) => void;
  handleSetSong: (song: Song) => (event: React.MouseEvent) => void;
  /* onClick: (event: MouseEvent) => void; */
};

type handleOnMouseEnterProps = {
  (event: React.MouseEvent): void;
};

type handleOnMouseLeaveProps = {
  (event: React.MouseEvent): void;
};

export const ListItem = ({
  id,
  song,
  favList,
  currentSong,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetSong,
}: ListItemProps) => {
  const [favChecked, setFavChecked] = useState<boolean>(false);
  const [playingThisSongNow, setPlayingThisSongNow] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(false);

  const dispatch = useDispatch();

  // FavSongs functions

  const handleOnClick = (song: Song, songId: string) => {
    if (favChecked === false) {
      handleAddSongToFav(song);
      setFavChecked(true);
    }
    if (favChecked === true) {
      handleDeleteSongFromFav(song, songId);
      setFavChecked(false);
    }
  };

  // Show/Hide Play/Stop Icon functions

  const handleOnMouseEnter: handleOnMouseEnterProps = useCallback(
    (event: React.MouseEvent) => {
      setShowPlayButton(true);
    },
    [showPlayButton]
  );

  const handleOnMouseLeave: handleOnMouseLeaveProps = useCallback(
    (event: React.MouseEvent) => {
      if (playingThisSongNow) {
        setShowPlayButton(true);
      } else {
        setShowPlayButton(false);
      }
    },
    [showPlayButton, playingThisSongNow]
  );

  // Play this song functions

  type asdProps = {
    id: string;
    song: Song;
  };

  const handlePlayThisSongNow = useCallback(
    (event: React.MouseEvent) => ({ id, song }: asdProps) => {
      if (NowIsPlaying.previewUrl === song.previewUrl) {
        if (playOrNot === true) {
          dispatch(setPlay({ play: false }));
          setPlayingThisSongNow(false);
          setShowPlayButton(true);
          dispatch(setIndex({ id }));
        } else {
          dispatch(setPlay({ play: true }));
          setPlayingThisSongNow(true);
          setShowPlayButton(true);
          dispatch(setIndex({ id }));
        }
      } else {
        dispatch(playThisSong({ song }));
        setPlayingThisSongNow(true);
        setShowPlayButton(true);
        dispatch(setIndex({ id }));
        dispatch(setPlay({ play: true }));
      }
    },
    [currentSong]
  );

  // Show songs added to favList

  useEffect(() => {
    favList.map((favListItem: Song) => {
      if (favListItem.previewUrl === song.previewUrl) setFavChecked(true);
    });
  }, []);

  // Show Play/Stop icon current playing song

  useEffect(() => {
    if (NowIsPlaying.previewUrl === song.previewUrl) {
      if (playOrNot === true) {
        setShowPlayButton(true);
        setPlayingThisSongNow(true);
      } else if (playOrNot === false) {
        setShowPlayButton(true);
        setPlayingThisSongNow(false);
      }
    } else {
      setShowPlayButton(false);
      setPlayingThisSongNow(false);
    }
  }, [NowIsPlaying, playOrNot, playingThisSongNow]);

  // Show current playing song

  useEffect(() => {
    NowIsPlaying.previewUrl !== song.previewUrl
      ? setPlayingThisSongNow(false)
      : setPlayingThisSongNow(true);
  }, [showPlayButton]);

  return (
    <ListItemContainer>
      <div
        className="row"
        onClick={handleSetSong(song)}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div
          className="playStopIconBorder"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
          }}
          onClick={handlePlayThisSongNow}
        >
          <div
            className="playStopIcon"
            style={{ visibility: showPlayButton ? "visible" : "hidden" }}
          >
            {playingThisSongNow ? (
              <i className="icon-pause" />
            ) : (
              <i className="icon-play" />
            )}
          </div>
        </div>
        <div
          className="favo"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
          }}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
            handleOnClick(song, song.previewUrl)
          }
        >
          {favChecked ? (
            <i className="icon-heart" />
          ) : (
            <i className="icon-heart-empty" />
          )}
        </div>
        <div
          className="titl"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
            color:
              NowIsPlaying.previewUrl === song.previewUrl
                ? "#1ed760"
                : "#b3b3b3",
          }}
        >
          {song.trackName}
        </div>
        <div
          className="auth"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
            color:
              NowIsPlaying.previewUrl === song.previewUrl
                ? "#1ed760"
                : "#b3b3b3",
          }}
        >
          {song.artistName}
        </div>
        <div
          className="album"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
            color:
              NowIsPlaying.previewUrl === song.previewUrl
                ? "#1ed760"
                : "#b3b3b3",
          }}
        >
          {song.collectionName}
        </div>
        <div
          className="date"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
            color:
              NowIsPlaying.previewUrl === song.previewUrl
                ? "#1ed760"
                : "#b3b3b3",
          }}
        >
          {song.releaseDate.slice(0, 10)}
        </div>
        <div
          className="time"
          style={{
            backgroundColor:
              currentSong.previewUrl === song.previewUrl
                ? "#ffffff10"
                : "transparent",
            color:
              NowIsPlaying.previewUrl === song.previewUrl
                ? "#1ed760"
                : "#b3b3b3",
          }}
        >
          <Duration seconds={/* parseInt(...) */ song.trackTimeMillis / 1000} />
        </div>
      </div>
    </ListItemContainer>
  );
};
