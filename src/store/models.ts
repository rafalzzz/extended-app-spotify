export type Album = {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: 9.99;
  collectionExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;
};

export type Artist = {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  amgArtistId: number;
  primaryGenreName: string;
  primaryGenreId: number;
};

export type Song = {
  previewUrl: string;
  trackName: string;
  artistName: string;
  collectionName: string;
  releaseDate: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl30: string;
  trackTimeMillis: any;
};

export type Playlist = {
  name: string;
  songs: Song[];
};
