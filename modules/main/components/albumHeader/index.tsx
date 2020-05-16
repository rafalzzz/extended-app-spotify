import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../../../../store/items/actions";

import { currentAlbum } from "../../../../store/items/selectors";

import { AlbumHeaderLayout } from "./layout";

export const AlbumHeader = () => {
  const album: string = useSelector(currentAlbum);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("songsByAlbum"));
  }, []);

  return <AlbumHeaderLayout currentAlbum={album} />;
};
