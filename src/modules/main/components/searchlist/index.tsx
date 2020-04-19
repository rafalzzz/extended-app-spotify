import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";

import { setCategory } from "../../../../store/items/actions";

import { SearchListLayout } from "./layout";

export const SearchList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("search"));
    dispatch(fetchSongsStarted("pop"));
  }, []);

  return <SearchListLayout />;
};
