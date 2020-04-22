import React from "react";

import { Switch, Route } from "react-router-dom";

import { MainContainer } from "./layout.styled";

import { MainHeader } from "./components/mainHeader";
import { About } from "./components/about";
import { SearchBar } from "./components/searchbar";
import { Search } from "./components/searchlist/index";
import { FavsList } from "./components/favslist/index";
import { Playlists } from "./components/playlists/index";
import { Albums } from "./components/albums/index";
import { Table } from "./components/table";
import { TracksHeader } from "./components/tracksHeader/index";

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
      <Route exact path="/user/search">
        <Search />
      </Route>
      <Route exact path="/user/search/albums">
        <Albums />
      </Route>
      <Route exact path="/user/search/tracks">
        <TracksHeader />
        <Table />
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
