import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../../../../store/items/actions";

import { currentTerm } from "../../../../store/items/selectors";

import { TracksHeaderLayout } from "./layout";

export const TracksHeader = () => {
  const term: string = useSelector(currentTerm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("songsByTerm"));
  }, []);

  return <TracksHeaderLayout currentTerm={term} />;
};
