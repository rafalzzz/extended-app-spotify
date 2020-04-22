import React from "react";
import { ArtistsSectionItemContainer } from "./artistItem.styled";
import { Artist } from "../../../../../store/models";

export type ArtistItemProps = {
  artist: Artist;
};

export const ArtistItem = ({ artist }: ArtistItemProps) => {
  return (
    <ArtistsSectionItemContainer>
      <div className="artistsSectionItemTitle">{artist.artistName}</div>
    </ArtistsSectionItemContainer>
  );
};
