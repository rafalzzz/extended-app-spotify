import React, { useState, useEffect, useCallback } from 'react';

import { Duration } from '../../../../helpers/Duration';

import {
   setIndex,
   playThisSong,
   overflow,
} from '../../../../store/items/actions';

import { setPlay } from '../../../../store/player/actions';

import { useDispatch } from 'react-redux';

import { TableElementContainer } from './layout.styled';

import { Song, Playlist } from '../../../../store/models';

type TableElementProps = {
   id: number;
   song: Song;
   favList: Song[];
   playlistsList: Playlist[];
   currentSong: Song;
   category: string;
   NowIsPlaying: Song;
   playOrNot: boolean;
   handleAddSongToFav: (song: Song) => void;
   handleDeleteSongFromFav: (song: Song) => void;
   handleSetSong: (song: Song) => (event: React.MouseEvent) => void;
   handleAddSongToPlaylist: (
      playlist: string,
      song: Song,
   ) => (event: React.MouseEvent) => void;
   handleDeleteSongFromPlaylist: (
      playlist: string,
      song: Song,
   ) => (event: React.MouseEvent) => void;
   setSongsArr: () => void;
};

type handleOnMouseEnterProps = {
   (event: React.MouseEvent): void;
};

type handleOnMouseLeaveProps = {
   (event: React.MouseEvent): void;
};

export const TableElement = ({
   id,
   song,
   favList,
   playlistsList,
   currentSong,
   category,
   NowIsPlaying,
   playOrNot,
   handleAddSongToFav,
   handleDeleteSongFromFav,
   handleSetSong,
   handleAddSongToPlaylist,
   handleDeleteSongFromPlaylist,
   setSongsArr,
}: TableElementProps) => {
   const [favChecked, setFavChecked] = useState<boolean>(false);
   const [playingThisSongNow, setPlayingThisSongNow] = useState<boolean>(false);
   const [showPlayButton, setShowPlayButton] = useState<boolean>(false);
   const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);

   const dispatch = useDispatch();

   const handleOnClick = useCallback(
      (song: Song) => (event: React.MouseEvent) => {
         if (favChecked === false) {
            handleAddSongToFav(song);
            setFavChecked(true);
         }
         if (favChecked === true) {
            handleDeleteSongFromFav(song);
            setFavChecked(false);
         }
      },
      [favChecked],
   );

   const handleOnMouseEnter: handleOnMouseEnterProps = useCallback(
      (event: React.MouseEvent) => {
         setShowPlayButton(true);
      },
      [showPlayButton],
   );

   const handleOnMouseLeave: handleOnMouseLeaveProps = useCallback(
      (event: React.MouseEvent) => {
         if (playingThisSongNow) {
            setShowPlayButton(true);
         } else {
            setShowPlayButton(false);
         }
      },
      [showPlayButton, playingThisSongNow],
   );

   const handlePlayThisSongNow = useCallback(
      (id: number, song: Song) => (event: React.MouseEvent) => {
         if (NowIsPlaying.previewUrl === song.previewUrl) {
            if (playOrNot === true) {
               dispatch(setPlay(false));
               setPlayingThisSongNow(false);
               setShowPlayButton(true);
               dispatch(setIndex(id));
            } else {
               dispatch(setPlay(true));
               setPlayingThisSongNow(true);
               setShowPlayButton(true);
               dispatch(setIndex(id));
            }
         } else {
            dispatch(playThisSong(song));
            setPlayingThisSongNow(true);
            setShowPlayButton(true);
            dispatch(setIndex(id));
            dispatch(setPlay(true));
         }

         setSongsArr();
      },
      [currentSong, playOrNot],
   );

   useEffect(() => {
      favList.map((favListItem: Song) => {
         if (favListItem.previewUrl === song.previewUrl) {
            setFavChecked(true);
         }
      });
   }, []);

   useEffect(() => {
      if (category === 'favList') {
         setFavChecked(true);
      }
   }, []);

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

   useEffect(() => {
      NowIsPlaying.previewUrl !== song.previewUrl
         ? setPlayingThisSongNow(false)
         : setPlayingThisSongNow(true);
   }, [showPlayButton]);

   const handleShowMoreOption = useCallback(
      (event: React.MouseEvent) => {
         if (showMoreOptions === true) {
            setShowMoreOptions(false);
            dispatch(overflow(false));
         } else if (showMoreOptions === false) {
            setShowMoreOptions(true);
            dispatch(overflow(true));
         }
      },
      [showMoreOptions],
   );

   return (
      <TableElementContainer>
         <div
            className="row"
            onClick={handleSetSong(song)}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}>
            <div
               className="playStopIconBorder"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
               }}
               onClick={handlePlayThisSongNow(id, song)}>
               <div
                  className="playStopIcon"
                  style={{ visibility: showPlayButton ? 'visible' : 'hidden' }}>
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
                        ? '#ffffff10'
                        : 'transparent',
               }}
               onClick={handleOnClick(song)}>
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
                        ? '#ffffff10'
                        : 'transparent',
                  color:
                     NowIsPlaying.previewUrl === song.previewUrl
                        ? '#1ed760'
                        : '#b3b3b3',
               }}>
               {song.trackName}
            </div>
            <div
               className="auth"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
                  color:
                     NowIsPlaying.previewUrl === song.previewUrl
                        ? '#1ed760'
                        : '#b3b3b3',
               }}>
               {song.artistName}
            </div>
            <div
               className="album"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
                  color:
                     NowIsPlaying.previewUrl === song.previewUrl
                        ? '#1ed760'
                        : '#b3b3b3',
               }}>
               {song.collectionName}
            </div>
            <div
               className="date"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
                  color:
                     NowIsPlaying.previewUrl === song.previewUrl
                        ? '#1ed760'
                        : '#b3b3b3',
               }}>
               {song.releaseDate.slice(0, 10)}
            </div>
            <div
               className="more"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
               }}
               onClick={handleShowMoreOption}>
               <span
                  style={{
                     visibility: showPlayButton ? 'visible' : 'hidden',
                  }}>
                  <i className="icon-dot-3" />
               </span>
               <div
                  className="moreOptModal"
                  style={{ display: showMoreOptions ? 'block' : 'none' }}
                  onClick={handleShowMoreOption}></div>
               <div
                  className="moreOpt"
                  style={{
                     display: showMoreOptions ? 'block' : 'none',
                     backgroundColor:
                        currentSong.previewUrl === song.previewUrl
                           ? '#ffffff10'
                           : '#181818',
                  }}>
                  <div className="moreOptItem">
                     {' '}
                     Add music to playlist
                     <div className="playlistListItemsContainer">
                        {playlistsList.map((playlist) => (
                           <div
                              className="playlistListItem"
                              onClick={handleDeleteSongFromPlaylist(
                                 playlist.name,
                                 song,
                              )}>
                              {playlist.name}
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="moreOptItem">
                     {' '}
                     Delete music from playlist
                     <div className="playlistListItemsContainer">
                        {playlistsList.map((playlist) => (
                           <div
                              className="playlistListItem"
                              onClick={handleDeleteSongFromPlaylist(
                                 playlist.name,
                                 song,
                              )}>
                              {playlist.name}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="time"
               style={{
                  backgroundColor:
                     currentSong.previewUrl === song.previewUrl
                        ? '#ffffff10'
                        : 'transparent',
                  color:
                     NowIsPlaying.previewUrl === song.previewUrl
                        ? '#1ed760'
                        : '#b3b3b3',
               }}>
               <Duration seconds={song.trackTimeMillis / 1000} />
            </div>
         </div>
      </TableElementContainer>
   );
};
