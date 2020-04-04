import React from "react";

import { PlaylistsContainer } from "./playlists.styled";
import { Playlist } from "../../../store/models";

type PlaylistsProps = {
  playlists: Playlist[];
  handleSetPlaylist: (name: string) => (event: React.MouseEvent) => void;
  currentPlaylistName: string;
};

export const Playlists = ({
  playlists,
  handleSetPlaylist,
  currentPlaylistName,
}: PlaylistsProps) => {
  return (
    <PlaylistsContainer>
      <div className="playlistsTitle">PLAYLISTS</div>
      {playlists &&
        playlists.map((playlist, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor:
                  currentPlaylistName === playlist.name
                    ? "#ffffff10"
                    : "transparent",
              }}
              className="playlistElement"
              onClick={handleSetPlaylist(playlist.name)}
            >
              {playlist.name}
            </div>
          );
        })}
    </PlaylistsContainer>
  );
};
