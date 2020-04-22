import React from "react";

import { useSelector } from "react-redux";

import { albumsList } from "../../../../store/fetchAlbums/selectors";

import { AlbumsLayout } from "./layout";
import { Album } from "../../../../store/models";

export const Albums = () => {
  const albums: Album[] = useSelector(albumsList);

  return <AlbumsLayout albums={albums} />;
};
