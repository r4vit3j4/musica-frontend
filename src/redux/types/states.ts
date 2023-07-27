export interface IPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  track: {
    id: number;
    trackUrl: string;
    trackName: string;
    artist: string;
    artworkUrl: string;
  } | null;
  status: {
    isLoading: boolean;
    isError: boolean;
    error: null | string;
  };
}
