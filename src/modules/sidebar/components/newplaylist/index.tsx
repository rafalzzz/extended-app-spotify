import React, { useState, useCallback } from "react";

import { useDispatch } from "react-redux";

import { createPlaylist } from "../../../../store/playlists/actions";

import { NewPlaylistLayout } from "./layout";

import { handleAddPlaylistToFirestore } from "../../../../helpers/FireStoreData";

export const NewPlaylist = () => {
  const [playlistName, setPlaylistName] = useState<string>("");
  const [playlistFormIsOpen, setPlaylistFormIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handlePlaylistForm = useCallback((event: React.MouseEvent) => {
    if (playlistFormIsOpen === false) {
      setPlaylistFormIsOpen(true);
    } else {
      setPlaylistName("");
      setPlaylistFormIsOpen(false);
    }
  }, []);

  const handlePlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleCreatePlaylist = useCallback((name: string) => {
    dispatch(createPlaylist(name));

    handleAddPlaylistToFirestore(name);
  }, []);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playlistName === "") {
      setPlaylistFormIsOpen(false);
    } else if (playlistName !== "") {
      handleCreatePlaylist(playlistName);
      setPlaylistName("");
      setPlaylistFormIsOpen(false);
    }
  };

  return (
    <NewPlaylistLayout
      handlePlaylistForm={handlePlaylistForm}
      handleOnSubmit={handleOnSubmit}
      handlePlaylistName={handlePlaylistName}
      playlistFormIsOpen={playlistFormIsOpen}
    />
  );
};
