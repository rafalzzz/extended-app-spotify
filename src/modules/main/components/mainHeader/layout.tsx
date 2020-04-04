import React from "react";

import { MainHeaderContainer } from "./layout.styled";
import { MoreOptions } from "./components/moreOptions";

import { Song } from "../../../../store/models";

type MainHeaderLayoutProps = {
  favListIsOpen: boolean;
  handleOpenFavList: (event: React.MouseEvent) => void;
  handleCloseFavList: (event: React.MouseEvent) => void;
  moreOptionsIsOpen: boolean;
  handleMoreOptions: (event: React.MouseEvent) => void;
  currentSong: Song;
  currentPlaylistName: string;
  playOrNot: boolean;
  handlePlayPause: (event: React.MouseEvent) => void;
  handleAddSongToPlaylist: (
    playlist: string,
    song: Song
  ) => (event: React.MouseEvent) => void;
  handleDeleteSongFromPlaylist: (
    playlist: string,
    song: Song
  ) => (event: React.MouseEvent) => void;
  handleDeletePlaylist: (name: string) => (event: React.MouseEvent) => void;
};

export const MainHeaderLayout = ({
  favListIsOpen,
  handleOpenFavList,
  handleCloseFavList,
  moreOptionsIsOpen,
  handleMoreOptions,
  currentSong,
  currentPlaylistName,
  playOrNot,
  handlePlayPause,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
  handleDeletePlaylist,
}: MainHeaderLayoutProps) => {
  return (
    <MainHeaderContainer>
      <div>
        {currentSong.previewUrl !== "" && (
          <div className="album">
            <img src={currentSong.artworkUrl100} alt="album" />
          </div>
        )}
        {currentSong.collectionName && <p>{currentSong.collectionName}</p>}
        {currentSong.collectionName && (
          <div className="artist">{currentSong.artistName}</div>
        )}
        {currentSong.collectionName && (
          <div className="title">{currentSong.trackName}</div>
        )}
        <button
          className="more rb"
          style={{
            border: moreOptionsIsOpen ? "solid 1px white" : "solid 1px #7f7f7f",
          }}
          onClick={handleMoreOptions}
        >
          <i className="icon-dot-3" />
        </button>
        <MoreOptions
          moreOptionsIsOpen={moreOptionsIsOpen}
          handleAddSongToPlaylist={handleAddSongToPlaylist}
          handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
          handleDeletePlaylist={handleDeletePlaylist}
          currentPlaylistName={currentPlaylistName}
          currentSong={currentSong}
        />
        <button
          className="favs rb"
          onClick={favListIsOpen ? handleCloseFavList : handleOpenFavList}
          style={{
            border: favListIsOpen ? "solid 1px white" : "solid 1px #7f7f7f",
          }}
        >
          <i className="icon-heart" />
        </button>
        <button className="pause" onClick={handlePlayPause}>
          {playOrNot ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </MainHeaderContainer>
  );
};
