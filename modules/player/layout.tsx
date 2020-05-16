import React from "react";

import { SongInfo } from "./components/songInfo";
import { PlayerButtons } from "./components/playerButtons";
import { ReactMusicPlayer } from "./components/reactPlayer";
import { Bar } from "./components/bar";
import { Volume } from "./components/volume";

import { PlayerLayoutContainer } from "./layout.styled";

export const PlayerLayout = () => {
  return (
    <PlayerLayoutContainer>
      <SongInfo />
      <div className="musicPlayer">
        <PlayerButtons />
        <ReactMusicPlayer />
        <Bar />
      </div>
      <Volume />
    </PlayerLayoutContainer>
  );
};
