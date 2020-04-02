export type Song = {
  previewUrl: string;
  trackName?: string;
  artistName?: string;
  collectionName?: string;
  releaseDate?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  artworkUrl30?: string;
  trackTimeMillis?: number;
};

export type Playlist = {
  name: string;
  songs: Song[];
};
