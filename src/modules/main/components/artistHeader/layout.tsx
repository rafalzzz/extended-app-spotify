import React from "react";

import { ArtistHeaderContainer } from "./layout.styled";

type ArtistHeaderLayoutProps = {
  currentArtist: string;
};

export const ArtistHeaderLayout = ({
  currentArtist,
}: ArtistHeaderLayoutProps) => {
  return (
    <ArtistHeaderContainer>
      <div>
        {currentArtist && (
          <div className="title">
            <span>{currentArtist}'s tracks</span>
          </div>
        )}
      </div>
    </ArtistHeaderContainer>
  );
};
