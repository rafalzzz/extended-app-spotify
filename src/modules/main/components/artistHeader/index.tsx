import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../../../../store/items/actions";

import { currentArtist } from "../../../../store/items/selectors";

import { ArtistHeaderLayout } from "./layout";

export const ArtistHeader = () => {
  const artist: string = useSelector(currentArtist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("songsByArtist"));
  }, []);

  return <ArtistHeaderLayout currentArtist={artist} />;
};
