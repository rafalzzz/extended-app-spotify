import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setCategory } from "../../../../store/items/actions";

import { FavsListLayout } from "./layout";

export const FavsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("favList"));
  }, []);

  return <FavsListLayout />;
};
