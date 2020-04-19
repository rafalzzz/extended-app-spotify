import React, { useCallback, memo } from "react";

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { playlists } from "../../store/playlists/selectors";
import { currentPlaylist } from "../../store/items/selectors";

import { setPlaylist } from "../../store/items/actions";

import { SidebarLayout } from "./layout";

import { Playlist } from "../../store/models";

export const Sidebar = memo(() => {
  const playlistsList: Playlist[] = useSelector(playlists);
  const currentPlaylistName: string = useSelector(currentPlaylist);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSetPlaylist = useCallback(
    (name: string) => (event: React.MouseEvent) => {
      dispatch(setPlaylist(name));
      console.log(currentPlaylistName);
      history.push(`/user/playlist/list/${name}`);
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
});
