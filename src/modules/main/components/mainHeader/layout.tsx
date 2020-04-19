import React from "react";

import { MainHeaderContainer } from "./layout.styled";

import { Song } from "../../../../store/models";

type MainHeaderLayoutProps = {
  category: string;
  handleOpenFavList: (event: React.MouseEvent) => void;
  handleCloseFavList: (event: React.MouseEvent) => void;
  currentSong: Song;
  playOrNot: boolean;
  handlePlayPause: (event: React.MouseEvent) => void;
};

export const MainHeaderLayout = ({
  category,
  handleOpenFavList,
  handleCloseFavList,
  currentSong,
  playOrNot,
  handlePlayPause,
}: MainHeaderLayoutProps) => {
  return (
    <MainHeaderContainer>
      <div>
        {currentSong.previewUrl !== "" && (
          <div className="album">
            <img src={currentSong.artworkUrl100} alt="album" />
          </div>
        )}
        {currentSong.collectionName && <p>{currentSong.collectionName}</p>}
        {currentSong.collectionName && (
          <div className="artist">{currentSong.artistName}</div>
        )}
        {currentSong.collectionName && (
          <div className="title">{currentSong.trackName}</div>
        )}
        <button
          className="favs rb"
          onClick={
            category === "favList" ? handleCloseFavList : handleOpenFavList
          }
          style={{
            border:
              category === "favList" ? "solid 1px white" : "solid 1px #7f7f7f",
          }}
        >
          <i className="icon-heart" />
        </button>
        <button className="pause" onClick={handlePlayPause}>
          {playOrNot ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </MainHeaderContainer>
  );
};
