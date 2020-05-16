import React from "react";
import { ArtistsSectionItemContainer } from "./artistItem.styled";
import { Artist } from "../../../../../store/models";

export type ArtistItemProps = {
  artist: Artist;
  handleFetchTracksByArtistName: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
};

export const ArtistItem = ({
  artist,
  handleFetchTracksByArtistName,
}: ArtistItemProps) => {
  return (
    <ArtistsSectionItemContainer>
      <div
        className="artistsSectionItemTitle"
        onClick={handleFetchTracksByArtistName(artist.artistName, 100)}
      >
        {artist.artistName}
      </div>
    </ArtistsSectionItemContainer>
  );
};
