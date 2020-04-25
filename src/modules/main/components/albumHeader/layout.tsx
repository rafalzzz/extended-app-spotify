import React from "react";

import { AlbumHeaderContainer } from "./layout.styled";

type AlbumHeaderLayoutProps = {
  currentAlbum: string;
};

export const AlbumHeaderLayout = ({ currentAlbum }: AlbumHeaderLayoutProps) => {
  return (
    <AlbumHeaderContainer>
      <div>
        {currentAlbum && (
          <div className="title">
            Tracks from <span>{currentAlbum}</span>
          </div>
        )}
      </div>
    </AlbumHeaderContainer>
  );
};
