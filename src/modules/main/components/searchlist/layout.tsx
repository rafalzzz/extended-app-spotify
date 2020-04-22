import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { artistsList } from "../../../../store/fetchArtists/selectors";
import { albumsList } from "../../../../store/fetchAlbums/selectors";
import { songsList } from "../../../../store/fetchSongs/selectors";

import { Artist, Album, Song } from "../../../../store/models";

import { ArtistItem } from "./components/artistItem";
import { AlbumItem } from "./components/albumItem";
import { TrackItem } from "./components/trackItem";

import { SearchContainer } from "./layout.styled";

export type SearchLayoutProps = {
  term: string;
  handleFetchMoreAlbums: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
  handleFetchMoreTracks: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
};

export const SearchLayout = ({
  handleFetchMoreAlbums,
  handleFetchMoreTracks,
  term,
}: SearchLayoutProps) => {
  const artists = useSelector(artistsList);
  const albums = useSelector(albumsList);
  const tracks = useSelector(songsList);

  return (
    <SearchContainer>
      <h5>Artists</h5>

      <div className="artistsSection">
        {artists &&
          artists.map((artist, i = 100) => (
            <ArtistItem artist={artist} key={i++} />
          ))}
      </div>

      <div className="sectionTitle">
        <h5>Albums</h5>
        <h6 onClick={handleFetchMoreAlbums(term, 100)}>Load more...</h6>
      </div>

      <div className="albumsSection">
        {albums &&
          albums.map((album, i = 100) => <AlbumItem album={album} key={i++} />)}
      </div>

      <div className="sectionTitle">
        <h5>Tracks</h5>
        <h6 onClick={handleFetchMoreTracks(term, 100)}>Load more...</h6>
      </div>

      <div className="tracksSection">
        {tracks &&
          tracks.map((track, i = 100) => <TrackItem track={track} key={i++} />)}
      </div>
    </SearchContainer>
  );
};
