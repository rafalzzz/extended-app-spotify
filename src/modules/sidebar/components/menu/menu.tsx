import React from "react";

import { Link } from "react-router-dom";

import "../../../../fontello/css/home.css";

import { MenuContainer } from "./menu.styled";

export const Menu = () => (
  <MenuContainer>
    <Link to="/user/about" style={{ textDecoration: "none" }}>
      <div>
        <i className="icon-home" />
        About
      </div>
    </Link>
    <Link to="/user/search" style={{ textDecoration: "none" }}>
      <div>
        <i className="icon-folder-empty" />
        Browse
      </div>
    </Link>
    <Link to="/user/playlist" style={{ textDecoration: "none" }}>
      <div>
        <i className="icon-note" />
        Playlists
      </div>
    </Link>
    <Link to="/user/favourite-list" style={{ textDecoration: "none" }}>
      <div>
        <i className="icon-heart" />
        Favourities
      </div>
    </Link>
  </MenuContainer>
);
