import React from "react";

import { AlbumItem } from "../searchlist/components/albumItem";

import { AlbumsContainer } from "./layout.styled";
import { Album } from "../../../../store/models";

export type SearchLayoutProps = {
  albums: Album[];
};

export const AlbumsLayout = ({ albums }: SearchLayoutProps) => {
  return (
    <AlbumsContainer>
      <div className="sectionTitle">
        <h5>Albums</h5>
      </div>

      <div className="albumsSection">
        {albums &&
          albums.map((album, i = 100) => <AlbumItem album={album} key={i++} />)}
      </div>
    </AlbumsContainer>
  );
};
