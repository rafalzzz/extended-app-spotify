import React from "react";

import { TableContainer } from "../table.styled";
import { TableHeader } from "../tableHeader";
import { ListItem } from "../listItem";

import { Song } from "../../../../store/models";

type FavListLayoutProps = {
  favList: Song[];
  currentSong: Song;
  NowIsPlaying: Song;
  playOrNot: boolean;
  handleAddSongToFav: (song: Song) => (event: React.MouseEvent) => void;
  handleDeleteSongFromFav: (
    song: Song,
    songId: string
  ) => (event: React.MouseEvent) => void;
  handleSetSong: (song: Song) => (event: React.MouseEvent) => void;
};

export const FavsListLayout = ({
  favList,
  currentSong,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetSong,
}: FavListLayoutProps) => {
  return (
    <TableContainer>
      <div className="table">
        <TableHeader />
        {favList &&
          favList.map((favListItem: Song, i: number = 0) => (
            <div key={i++}>
              <ListItem
                id={i++}
                song={favListItem}
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
