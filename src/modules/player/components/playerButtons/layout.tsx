import React from "react";

import { PlayerButtonsContainer } from "./layout.styled";

type PlayerButtonsLayoutProps = {
  handleShuffleButton: (event: any) => void;
  shuffleSongs: boolean;
  handlePreviewButton: (event: React.MouseEvent) => void;
  handlePlayPause: (event: React.MouseEvent) => void;
  playing: boolean;
  handleNextButton: (event: React.MouseEvent) => void;
  handleToggleLoop: (event: React.MouseEvent) => void;
  loop: boolean;
};

export const PlayerButtonsLayout = ({
  handleShuffleButton,
  shuffleSongs,
  handlePreviewButton,
  handlePlayPause,
  playing,
  handleNextButton,
  handleToggleLoop,
  loop,
}: PlayerButtonsLayoutProps) => {
  return (
    <PlayerButtonsContainer>
      <div
        className="iconLeft"
        onClick={handleShuffleButton}
        style={{ color: shuffleSongs ? "#1ed760" : "#b3b3b3" }}
      >
        <i className="icon-shuffle" />
      </div>
      <div className="icon" onClick={handlePreviewButton}>
        <i className="icon-to-start" />
      </div>
      <div className="icon mainIcon" onClick={handlePlayPause}>
        {playing ? <i className="icon-pause" /> : <i className="icon-play" />}
      </div>
      <div className="icon" onClick={handleNextButton}>
        <i className="icon-to-end" />
      </div>
      <div
        className="icon iconRight"
        onClick={handleToggleLoop}
        style={{ color: loop ? "#1ed760" : "#b3b3b3" }}
      >
        <i className="icon-loop-alt" />
      </div>
    </PlayerButtonsContainer>
  );
};
