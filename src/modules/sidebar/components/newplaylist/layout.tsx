import React from "react";

import { NewPlaylistContainer } from "./layout.styled";

import { NewPlaylistForm } from "./components/newplaylistForm";

type NewPlaylistLayoutProps = {
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePlaylistForm: (event: React.MouseEvent) => void;
  handlePlaylistName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  playlistFormIsOpen: boolean;
};

export const NewPlaylistLayout = ({
  handleOnSubmit,
  handlePlaylistForm,
  handlePlaylistName,
  playlistFormIsOpen,
}: NewPlaylistLayoutProps) => (
  <NewPlaylistContainer>
    <div onClick={handlePlaylistForm}>
      <i className="icon-plus" />
      New Playlist
    </div>
    <div style={{ display: playlistFormIsOpen ? "block" : "none" }}>
      <NewPlaylistForm
        handlePlaylistForm={handlePlaylistForm}
        handleOnSubmit={handleOnSubmit}
        handlePlaylistName={handlePlaylistName}
      />
    </div>
  </NewPlaylistContainer>
);
