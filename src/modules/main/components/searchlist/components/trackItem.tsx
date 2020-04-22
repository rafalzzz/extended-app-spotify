import React, { useState } from "react";
import { TracksSectionItemContainer } from "./trackItem.styled";
import { Song } from "../../../../../store/models";

export type TrackItemProps = {
  track: Song;
};

export const TrackItem = ({ track }: TrackItemProps) => {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const imgUrl: string = track.artworkUrl100;

  return (
    <TracksSectionItemContainer>
      <div className="tracksSectionItem">
        <div
          className="tracksSectionItemImgContainer"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={(event: React.MouseEvent): void => {
            setMouseIsOver(true);
          }}
          onMouseOver={(event: React.MouseEvent): void => {
            setMouseIsOver(true);
          }}
          onMouseLeave={(event: React.MouseEvent): void => {
            setMouseIsOver(false);
          }}
        >
          <div className="tracksSectionItemImg"></div>
          <div
            className="tracksSectionItemButton"
            style={{
              display: mouseIsOver ? "flex" : "none",
            }}
          >
            <i className="icon-play" />
          </div>
        </div>
        <div className="tracksSectionItemTitle">
          <div className="trackTitle">{track.trackName}</div>
          <div className="trackArtist">{track.artistName}</div>
        </div>
      </div>
    </TracksSectionItemContainer>
  );
};
