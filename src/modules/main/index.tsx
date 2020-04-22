import React, { memo, useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchArtistsStarted } from "../../store/fetchArtists/actions";
import { fetchAlbumsStarted } from "../../store/fetchAlbums/actions";
import { fetchSongsStarted } from "../../store/fetchSongs/actions";
import { setCurrentTerm } from "../../store/items/actions";

import { MainLayout } from "./layout";

export const Main = memo(() => {
  const [term, setTerm] = useState<string>("");

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const history = useHistory();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(fetchArtistsStarted(term));
    dispatch(fetchAlbumsStarted(term, 8));
    dispatch(fetchSongsStarted(term, 8));
    dispatch(setCurrentTerm(term));
    history.push(`/user/search`);
  };

  return (
    <MainLayout
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
});
