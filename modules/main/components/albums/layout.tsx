import React from "react";

import { AlbumItem } from "../searchlist/components/albumItem";

import { AlbumsContainer } from "./layout.styled";
import { Album } from "../../../../store/models";

export type AlbumsLayoutProps = {
  albums: Album[];
  handleFetchTracksByAlbumName: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
  handlePlayThisAlbumNow: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
};

export const AlbumsLayout = ({
  albums,
  handleFetchTracksByAlbumName,
  handlePlayThisAlbumNow,
}: AlbumsLayoutProps) => {
  return (
    <AlbumsContainer>
      <div className="sectionTitle">
        <h5>Albums</h5>
      </div>

      <div className="albumsSection">
        {albums &&
          albums.map((album, i = 100) => (
            <AlbumItem
              album={album}
              key={i++}
              handleFetchTracksByAlbumName={handleFetchTracksByAlbumName}
              handlePlayThisAlbumNow={handlePlayThisAlbumNow}
            />
          ))}
      </div>
    </AlbumsContainer>
  );
};
