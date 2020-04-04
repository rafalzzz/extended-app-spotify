import React from "react";

import { MoreOptionsContainer } from "./moreOptions.styled";

import { Song } from "../../../../../store/models";

type MoreOptionsProps = {
  moreOptionsIsOpen: boolean;
  handleAddSongToPlaylist: (
    playlist: string,
    song: Song
  ) => (event: React.MouseEvent) => void;
  handleDeleteSongFromPlaylist: (
    playlist: string,
    song: Song
  ) => (event: React.MouseEvent) => void;
  handleDeletePlaylist: (name: string) => (event: React.MouseEvent) => void;
  currentPlaylistName: string;
  currentSong: Song;
};

export const MoreOptions = ({
  moreOptionsIsOpen,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
  handleDeletePlaylist,
  currentPlaylistName,
  currentSong,
}: MoreOptionsProps) => (
  <MoreOptionsContainer>
    <div
      className="moreOptions"
      style={{ display: moreOptionsIsOpen ? "block" : "none" }}
    >
      <div onClick={handleAddSongToPlaylist(currentPlaylistName, currentSong)}>
        Add music to playlist
      </div>
      <div
        onClick={handleDeleteSongFromPlaylist(currentPlaylistName, currentSong)}
      >
        Delete music from playlist
      </div>
      <div onClick={handleDeletePlaylist(currentPlaylistName)}>
        Delete playlist
      </div>
    </div>
  </MoreOptionsContainer>
);
