import React from "react";

import { useSelector } from "react-redux";

import { artistsList } from "../../../../store/fetchArtists/selectors";
import { albumsList } from "../../../../store/fetchAlbums/selectors";
import { songsList } from "../../../../store/fetchSongs/selectors";

import { ArtistItem } from "./components/artistItem";
import { AlbumItem } from "./components/albumItem";
import { TrackItem } from "./components/trackItem";

import { SearchContainer } from "./layout.styled";
import { Song } from "../../../../store/models";

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
  handleFetchTracksByArtistName: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
  handleFetchTracksByAlbumName: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
  handlePlayThisAlbumNow: (
    term: string,
    limit: number
  ) => (event: React.MouseEvent) => void;
  artistsArrLength: number;
  albumsArrLength: number;
  songsArrLength: number;
  handleSetCurrentSong: (
    song: Song,
    limit: number
  ) => (event: React.MouseEvent) => void;
  handlePlayThisTrackNow: (
    song: Song,
    limit: number
  ) => (event: React.MouseEvent) => void;
};

export const SearchLayout = ({
  handleFetchMoreAlbums,
  handleFetchMoreTracks,
  term,
  handleFetchTracksByArtistName,
  handleFetchTracksByAlbumName,
  handlePlayThisAlbumNow,
  artistsArrLength,
  albumsArrLength,
  songsArrLength,
  handleSetCurrentSong,
  handlePlayThisTrackNow,
}: SearchLayoutProps) => {
  const artists = useSelector(artistsList);
  const albums = useSelector(albumsList);
  const tracks = useSelector(songsList);

  return (
    <SearchContainer>
      {term === "" && (
        <div className="info">Search by song title, author or album name.</div>
      )}

      {term && <h5>Artists</h5>}

      {term && (
        <div className="artistsSection">
          {artistsArrLength === 0 && <div>Artist not found</div>}
          {artists &&
            artists.map((artist, i = 100) => (
              <ArtistItem
                artist={artist}
                key={i++}
                handleFetchTracksByArtistName={handleFetchTracksByArtistName}
              />
            ))}
        </div>
      )}

      {term && (
        <div className="sectionTitle">
          <h5>Albums</h5>
          <h6
            onClick={handleFetchMoreAlbums(term, 100)}
            style={{
              color: albumsArrLength === 8 ? "white" : "transparent",
            }}
          >
            Load more...
          </h6>
        </div>
      )}

      {term && (
        <div className="albumsSection">
          {albumsArrLength === 0 && (
            <div className="error">Album not found</div>
          )}
          {albums &&
            albums.map((album, i = 1000) => (
              <AlbumItem
                album={album}
                key={i++}
                handleFetchTracksByAlbumName={handleFetchTracksByAlbumName}
                handlePlayThisAlbumNow={handlePlayThisAlbumNow}
              />
            ))}
        </div>
      )}

      {term && (
        <div className="sectionTitle">
          <h5>Tracks</h5>
          <h6
            onClick={handleFetchMoreTracks(term, 100)}
            style={{
              color: songsArrLength === 8 ? "white" : "transparent",
            }}
          >
            Load more...
          </h6>
        </div>
      )}

      {term && (
        <div className="tracksSection">
          {songsArrLength === 0 && <div className="error">Track not found</div>}
          {tracks &&
            tracks.map((track, i = 0) => (
              <TrackItem
                track={track}
                id={i++}
                handleSetCurrentSong={handleSetCurrentSong}
                handlePlayThisTrackNow={handlePlayThisTrackNow}
                key={i++}
              />
            ))}
        </div>
      )}
    </SearchContainer>
  );
};
