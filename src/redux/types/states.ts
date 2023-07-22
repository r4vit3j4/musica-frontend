export interface IPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  artworkUrl: string;
  track: {
    id: number;
    trackUrl: string;
    trackName: string;
    artist: string;
  } | null;
  status: {
    isLoading: boolean;
    isError: boolean;
    error: null | string;
  };
}
