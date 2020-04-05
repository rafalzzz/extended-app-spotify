import React, { useEffect, useCallback } from "react";

import { db } from "../../common/firebase";
import { useDispatch } from "react-redux";
import { addSongToFav } from "../../store/favSongs/actions";
import {
  createPlaylist,
  addSongToPlaylist,
} from "../../store/playlists/actions";
import { LoginLayout } from "./layout";

import { Song } from "../../store/models";

type LoginProps = {
  onClick: (event: React.MouseEvent) => void;
};

export const Login = ({ onClick }: LoginProps) => {
  const dispatch = useDispatch();

  const handleDispatchAddSongToFav = useCallback((song: Song) => {
    dispatch(addSongToFav({ song: song }));
  }, []);

  useEffect(() => {
    db.collection("favList")
      .doc("favList")
      .get()
      .then((doc: any) => {
        doc.data().songs.forEach((song: Song) => {
          handleDispatchAddSongToFav(song);
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    db.collection("playlists")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          let name: any = doc.data().name;
          dispatch(createPlaylist({ name }));
          doc.data().songs.forEach((name: string, song: Song) => {
            dispatch(addSongToPlaylist({ playlistName: name, song: song }));
          });
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return <LoginLayout onClick={onClick} />;
};
