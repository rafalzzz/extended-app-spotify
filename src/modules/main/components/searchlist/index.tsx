import React, { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { currentTerm } from "../../../../store/items/selectors";

import { fetchAlbumsStarted } from "../../../../store/fetchAlbums/actions";
import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";

import { setCategory } from "../../../../store/items/actions";

import { SearchLayout } from "./layout";

export const Search = () => {
  const term = useSelector(currentTerm);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(setCategory("search"));
    /* dispatch(fetchSongsStarted("pop")); */
  }, []);

  const handleFetchMoreAlbums = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(fetchAlbumsStarted(term, 100));
      history.push("/user/search/albums");
    },
    []
  );

  const handleFetchMoreTracks = useCallback(
    (term: string, limit: number) => (event: React.MouseEvent) => {
      dispatch(fetchSongsStarted(term, 100));
      history.push("/user/search/tracks");
    },
    []
  );

  return (
    <SearchLayout
      term={term}
      handleFetchMoreAlbums={handleFetchMoreAlbums}
      handleFetchMoreTracks={handleFetchMoreTracks}
    />
  );
};
