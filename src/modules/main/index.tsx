import React, { memo, useState } from "react";

import { useDispatch } from "react-redux";

import { fetchSongsStarted } from "../../store/fetchSongs/actions";

import { MainLayout } from "./layout";

import { AppDispatch } from "../../store/index";

export const Main = memo(() => {
  const [term, setTerm] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(fetchSongsStarted({ term: term }));
  };

  return (
    <MainLayout
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
});
