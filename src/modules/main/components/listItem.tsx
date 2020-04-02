import React, { useState, useEffect, useCallback } from "react";

import { Duration } from "../../../helpers/Duration";

import { setIndex, handlePlayThisSong } from "../../../store/items/actions";

import { handlePlayOrStop } from "../../../store/player/actions";

import {
  addSongToFav,
  deleteSongFromFav
} from "../../../store/favSongs/actions";

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
  handleAddSongToFav?: (song: Song) => (event: MouseEvent) => void;
  handleDeleteSongFromFav: (
    song: Song,
    id: number
  ) => (event: MouseEvent) => void;
  handleSetSong: (song: Song) => (event: MouseEvent) => void;
  /* onClick: (event: MouseEvent) => void; */
};

type handleOnMouseEnterProps = {
  (event: MouseEvent): void;
};

type handleOnMouseLeaveProps = {
  (event: MouseEvent): void;
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
  handleSetSong
}: ListItemProps) => {
  const [favChecked, setFavChecked] = useState<boolean>(false);
  const [playingThisSongNow, setPlayingThisSongNow] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  // FavSongs functions

  const handleOnClick = (song: Song, id: string) => {
    if (favChecked === false) {
      addSongToFav(song);
      setFavChecked(true);
    }
    if (favChecked === true) {
      deleteSongFromFav(song, id);
      setFavChecked(false);
    }
  };

  // Show/Hide Play/Stop Icon functions

  const handleOnMouseEnter: handleOnMouseEnterProps = useCallback(
    event => {
      setShowPlayButton(true);
    },
    [showPlayButton]
  );

  const handleOnMouseLeave: handleOnMouseLeaveProps = useCallback(
    (event: MouseEvent) => {
      if (playingThisSongNow) {
        setShowPlayButton(true);
      } else {
        setShowPlayButton(false);
      }
    },
    [showPlayButton, playingThisSongNow]
  );

  // Play this song functions

  const handlePlayThisSongNow = useCallback(
    (event: MouseEvent) => {
      if (NowIsPlaying.previewUrl === song.previewUrl) {
        if (playOrNot === true) {
          dispatch(handlePlayOrStop({ play: false }));
          setPlayingThisSongNow(false);
          setShowPlayButton(true);
          dispatch(setIndex({ id }));
        } else {
          dispatch(handlePlayOrStop({ play: true }));
          setPlayingThisSongNow(true);
          setShowPlayButton(true);
          dispatch(setIndex({ id }));
        }
      } else {
        dispatch(handlePlayThisSong({ song }));
        setPlayingThisSongNow(true);
        setShowPlayButton(true);
        dispatch(setIndex({ id }));
        dispatch(handlePlayOrStop({ play: true }));
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
                : "transparent"
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
                : "transparent"
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
                : "#b3b3b3"
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
                : "#b3b3b3"
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
                : "#b3b3b3"
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
                : "#b3b3b3"
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
                : "#b3b3b3"
          }}
        >
          <Duration seconds={parseInt(song.trackTimeMillis / 1000)} />
        </div>
      </div>
    </ListItemContainer>
  );
};
