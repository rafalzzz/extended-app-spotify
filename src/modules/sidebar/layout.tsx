import React from "react";

import { SidebarContainer } from "./layout.styled";

import { Menu } from "./components/menu";
import { Playlists } from "./components/playlists";
import { NewPlaylist } from "./components/newplaylist/index";
import { Playlist } from "../../store/models";

type SidebarLayoutProps = {
  playlists: Playlist[];
  handleSetPlaylist: (name: string) => (event: React.MouseEvent) => void;
  currentPlaylistName: string;
};

export const SidebarLayout = ({
  playlists,
  handleSetPlaylist,
  currentPlaylistName,
}: SidebarLayoutProps) => (
  <SidebarContainer>
    <Menu />
    <Playlists
      playlists={playlists}
      handleSetPlaylist={handleSetPlaylist}
      currentPlaylistName={currentPlaylistName}
    />
    <NewPlaylist />
  </SidebarContainer>
);
