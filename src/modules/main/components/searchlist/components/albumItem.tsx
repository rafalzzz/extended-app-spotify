import React, { useState } from "react";
import { AlbumsSectionItemContainer } from "./albumItem.styled";

import { Album } from "../../../../../store/models";

export type AlbumItemProps = {
  album: Album;
};

export const AlbumItem = ({ album }: AlbumItemProps) => {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const imgUrl: string = album.artworkUrl100;

  return (
    <AlbumsSectionItemContainer>
      <div className="albumsSectionItem">
        <div
          className="albumsSectionItemImgContainer"
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
          <div className="albumsSectionItemImg"></div>
          <div
            className="albumsSectionItemButton"
            style={{
              display: mouseIsOver ? "flex" : "none",
            }}
          >
            <i className="icon-play" />
          </div>
        </div>
        <div className="albumsSectionItemTitle">
          <div className="albumTitle">{album.collectionCensoredName}</div>
          <div className="albumArtist">{album.artistName}</div>
        </div>
      </div>
    </AlbumsSectionItemContainer>
  );
};
