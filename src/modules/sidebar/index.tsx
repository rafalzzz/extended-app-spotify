import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { playlists } from "../../store/playlists/selectors";
import { currentPlaylist } from "../../store/items/selectors";

import { setPlaylist } from "../../store/items/actions";

import { SidebarLayout } from "./layout";

import { Playlist } from "../../store/models";

export const Sidebar = () => {
  const playlistsList: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const dispatch = useDispatch();

  const handleSetPlaylist = useCallback(
    (name: string) => (event: React.MouseEvent) => {
      dispatch(setPlaylist(name));
      console.log(currentPlaylistName);
    },
    []
  );

  return (
    <div>
      <SidebarLayout
        playlists={playlistsList}
        handleSetPlaylist={handleSetPlaylist}
        currentPlaylistName={currentPlaylistName}
      />
    </div>
  );
};
