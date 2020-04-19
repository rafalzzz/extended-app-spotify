import React, { useState, useEffect } from "react";

import { PlaylistItemContainer } from "./playlistItem.styled";
import { Playlist } from "../../../../../store/models";

export type PlaylistItemProps = {
  id: number;
  playlist: Playlist;
  handlePlayPlaylist: (name: string) => (event: React.MouseEvent) => void;
  handleDeletePlaylist: (name: string) => (event: React.MouseEvent) => void;
};

export const PlaylistItem = ({
  id,
  playlist,
  handlePlayPlaylist,
  handleDeletePlaylist,
}: PlaylistItemProps) => {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>(
    "url(https://cdn.pixabay.com/photo/2018/05/08/21/28/spotify-3384002_960_720.png)"
  );

  const img = (playlist: Playlist) => {
    if (playlist.songs.length === 0) {
      setImgUrl(
        "url(https://cdn.pixabay.com/photo/2018/05/08/21/28/spotify-3384002_960_720.png)"
      );
    } else if (playlist.songs.length !== 0) {
      setImgUrl(`url(${playlist.songs[0].artworkUrl100})`);
    }
  };

  useEffect(() => {
    img(playlist);
  }, []);

  return (
    <PlaylistItemContainer>
      <div className="playlistItemContainer" key={id}>
        <div className="playlistItemElements">
          <div
            className="playlistItemImg"
            style={{
              opacity: mouseIsOver ? "0.5" : "1",
              backgroundImage: imgUrl,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseOver={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseLeave={(event: React.MouseEvent): void => {
              setMouseIsOver(false);
            }}
          ></div>
          <div
            className="playlistItemPlay"
            style={{
              display: mouseIsOver ? "flex" : "none",
            }}
            onClick={handlePlayPlaylist(playlist.name)}
            onMouseEnter={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseOver={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseLeave={(event: React.MouseEvent): void => {
              setMouseIsOver(false);
            }}
          >
            <i className="icon-play" />
          </div>
          <div
            className="playlistItemDelete"
            onClick={handleDeletePlaylist(playlist.name)}
            onMouseEnter={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseOver={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            onMouseLeave={(event: React.MouseEvent): void => {
              setMouseIsOver(true);
            }}
            style={{ display: mouseIsOver ? "flex" : "none" }}
          >
            <i className="icon-cancel-circled-outline" />
          </div>
        </div>
        <div className="playlistItemName"> {playlist.name} </div>
      </div>
    </PlaylistItemContainer>
  );
};
