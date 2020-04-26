import React from "react";

import { Switch, Route } from "react-router-dom";

import { PlaylistLayoutContainer } from "./layout.styled";

import { PlaylistItem } from "./components/playlistItem";
import { Playlist } from "../../../../store/models";
import { Table } from "../table";

export type PlaylistLayoutProps = {
  playlistsList: Playlist[];
  handlePlayPlaylist: (name: string) => (event: React.MouseEvent) => void;
  handleDeletePlaylist: (name: string) => (event: React.MouseEvent) => void;
};

export const PlaylistLayout = ({
  playlistsList,
  handlePlayPlaylist,
  handleDeletePlaylist,
}: PlaylistLayoutProps) => {
  return (
    <Switch>
      <Route path={`/user/playlist/list`}>
        <Table />
      </Route>
      <Route exact path="/user/playlist">
        <PlaylistLayoutContainer>
          {playlistsList.map((playlist: Playlist, id: number = 0) => (
            <PlaylistItem
              playlist={playlist}
              handlePlayPlaylist={handlePlayPlaylist}
              handleDeletePlaylist={handleDeletePlaylist}
              key={id++}
              id={id++}
            />
          ))}
        </PlaylistLayoutContainer>
      </Route>
    </Switch>
  );
};
