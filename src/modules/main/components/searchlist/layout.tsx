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
  handleAddSongToFav: (song: Song) => (event: MouseEvent) => void;
  handleDeleteSongFromFav: (
    song: Song,
    id: number
  ) => (event: MouseEvent) => void;
  handleSetSong: (song: Song) => (event: MouseEvent) => void;
  loading: boolean;
  arrLength: number;
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
  arrLength
}: SearchListLayoutProps) => {
  return (
    <TableContainer>
      <div className="table">
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
