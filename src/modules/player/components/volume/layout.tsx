import React from "react";

import { VolumeContainer } from "./layout.styled";

type VolumeLayoutProps = {
  volume: number;
  muted: boolean;
  volumeIcon: string;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleMuted: (event: MouseEvent) => void;
};

export const VolumeLayout = ({
  volume,
  muted,
  volumeIcon,
  handleVolumeChange,
  handleToggleMuted
}: VolumeLayoutProps) => {
  return (
    <VolumeContainer>
      <div
        className="volumeElement volIcon"
        style={{ color: muted ? "red" : "#b3b3b3" }}
        onClick={handleToggleMuted}
      >
        <i className={volumeIcon} />
      </div>
      <div className="volumeElement">
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </VolumeContainer>
  );
};
