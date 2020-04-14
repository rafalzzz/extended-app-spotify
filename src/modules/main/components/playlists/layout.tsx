import React from "react";

import { TableContainer } from "../table.styled";
import { TableHeader } from "../tableHeader";
import { ListItem } from "../listItem";

import { Song } from "../../../../store/models";

type PlaylistLayoutProps = {
  songs: Song[];
  favList: Song[];
  currentSong: Song;
  NowIsPlaying: Song;
  playOrNot: boolean;
  handleAddSongToFav: (song: Song) => void;
  handleDeleteSongFromFav: (song: Song) => void;
  handleSetSong: (song: Song) => (event: React.MouseEvent) => void;
  overflow: boolean;
};

export const PlaylistLayout = ({
  songs,
  favList,
  currentSong,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetSong,
  overflow,
}: PlaylistLayoutProps) => {
  return (
    <TableContainer>
      <div
        className="table"
        style={{ overflowY: overflow ? "hidden" : "scroll" }}
      >
        <TableHeader />
        {favList &&
          songs.map((song, i = 0) => (
            <div key={i++}>
              <ListItem
                id={i++}
                song={song}
                favList={favList}
                currentSong={currentSong}
                NowIsPlaying={NowIsPlaying}
                playOrNot={playOrNot}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetSong={handleSetSong}
              />
            </div>
          ))}
        <div style={{ height: "17px" }}></div>
      </div>
    </TableContainer>
  );
};
