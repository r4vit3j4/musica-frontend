export interface IGetTrackResponse {
  id: number;
  trackUrl: string;
  trackName: string;
  artist: string;
  artworkUrl: string;
  playSong: boolean;
}

export interface IPostTrackResponse {
  trackName: string;
  track: File;
  artist: string;
}
