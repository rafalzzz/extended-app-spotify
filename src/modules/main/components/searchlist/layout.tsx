import React from "react";

import { TableContainer } from "../table.styled";
import { TableHeader } from "../tableHeader";
import { ListItem } from "../listItem";
import { Error } from "../error";
import { Loading } from "../loading";

import { Song } from "../../../../store/models";

type SearchListLayoutProps = {
  songs: Song[];
  favList: Song[];
  currentSong: Song;
  NowIsPlaying: Song;
  playOrNot: boolean;
  handleAddSongToFav: (song: Song) => void;
  handleDeleteSongFromFav: (song: Song) => void;
  handleSetSong: (song: Song) => (event: React.MouseEvent) => void;
  loading: boolean;
  arrLength: number;
  overflow: boolean;
};

export const SearchListLayout = ({
  songs,
  favList,
  currentSong,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetSong,
  loading,
  arrLength,
  overflow,
}: SearchListLayoutProps) => {
  return (
    <TableContainer>
      <div
        className="table"
        style={{ overflowY: overflow ? "hidden" : "scroll" }}
      >
        {loading && <Loading />}
        {arrLength === 0 && <Error />}
        {arrLength > 0 && <TableHeader />}
        {songs &&
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
