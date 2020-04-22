import React from "react";

import { useSelector } from "react-redux";

import { currentTerm } from "../../../../store/items/selectors";

import { TracksHeaderLayout } from "./layout";

export const TracksHeader = () => {
  const term: string = useSelector(currentTerm);

  return <TracksHeaderLayout currentTerm={term} />;
};
