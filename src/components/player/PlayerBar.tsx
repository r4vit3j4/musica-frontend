"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Button } from "../ui/button";
import {
  PauseIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  PlayIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/20/solid";
import {
  muteUnmute,
  playPause,
  selectPlayer,
} from "@/redux/features/player/playerSlice";
import { getTrack } from "@/redux/features/player/services";

const PlayerBar = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, isMuted, status, track } = useAppSelector(selectPlayer);

  const handlePlayPause = () => {
    dispatch(
      playPause({
        type: "oppose",
      })
    );
  };

  const playNextSong = () => {
    dispatch(
      getTrack({
        playSong: true,
        prevSongId: track?.id as number,
      })
    );
  };

  const handleMuteUnmute = () => {
    dispatch(muteUnmute());
  };

  return (
    <div className="border p-1 rounded-xl bg-background/70 z-50 shadow">
      <div className="flex items-center">
        {/* <Button size="icon" variant="ghost">
          <BackwardIcon className="h-5 w-5" />
        </Button> */}
        <Button
          aria-label="pause/play"
          size="icon"
          variant="ghost"
          onClick={handlePlayPause}
          disabled={status.isLoading}
          tabIndex={-1}
        >
          {isPlaying ? (
            <PauseIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5" />
          )}
        </Button>
        <Button
          aria-label="play-next-track"
          size="icon"
          variant="ghost"
          onClick={playNextSong}
          disabled={status.isLoading}
          tabIndex={-1}
        >
          <ForwardIcon className="h-5 w-5" />
        </Button>
        <Button
          aria-label="mute/unmute"
          size="icon"
          variant="ghost"
          onClick={handleMuteUnmute}
          disabled={status.isLoading}
          tabIndex={-1}
        >
          {isMuted ? (
            <SpeakerXMarkIcon className="h-5 w-5" />
          ) : (
            <SpeakerWaveIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default PlayerBar;
