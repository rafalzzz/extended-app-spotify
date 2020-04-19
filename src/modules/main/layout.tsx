import React from "react";

import { Switch, Route } from "react-router-dom";

import { MainContainer } from "./layout.styled";

import { MainHeader } from "./components/mainHeader";
import { About } from "./components/about";
import { SearchBar } from "./components/searchbar";
import { SearchList } from "./components/searchlist/index";
import { FavsList } from "./components/favslist/index";
import { Playlists } from "./components/playlists/index";

type MainLayoutProps = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const MainLayout = ({
  handleOnChange,
  handleOnSubmit,
}: MainLayoutProps) => (
  <MainContainer>
    <SearchBar
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
    <Switch>
      <Route path="/user/about">
        <About />
      </Route>
      <Route path="/user/search">
        <MainHeader />
        <SearchList />
      </Route>
      <Route path="/user/favourite-list">
        <MainHeader />
        <FavsList />
      </Route>
      <Route path="/user/playlist">
        <MainHeader />
        <Playlists />
      </Route>
    </Switch>
  </MainContainer>
);
