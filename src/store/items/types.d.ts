declare module "MyModels" {
  export type Items = {
    song: { song: { previewUrl: string,
      trackName?: string,
      artistName?: string,
      collectionName?: string,
      releaseDate?: string,
      artworkUrl60?: string,
      trackTimeMillis?: number,
      ...song?: any}}
    index: number;
    category: string;
    playlist: string;
    currentPlayer: { song: { previewUrl: string,
      trackName?: string,
      artistName?: string,
      collectionName?: string,
      releaseDate?: string,
      artworkUrl60?: string,
      trackTimeMillis?: number,
      ...song?: any}}
  };
}
