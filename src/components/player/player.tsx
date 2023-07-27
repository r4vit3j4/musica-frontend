"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  muteUnmute,
  playPause,
  selectPlayer,
} from "@/redux/features/player/playerSlice";
import { getTrack } from "@/redux/features/player/services";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TrackInfo from "./trackInfo";
import PlayerBar from "./PlayerBar";
import { store } from "@/redux/store/store";

const Player = () => {
  const [showPlayLabel, setShowPlayLabel] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();
  const { isPlaying, isMuted, track } = useAppSelector(selectPlayer);

  const playNextSong = () => {
    // since state cant be accessed from callback of event listeners, we get the track data directly
    const { track } = store.getState().player;
    dispatch(
      getTrack({
        playSong: true,
        prevSongId: track?.id as number,
      })
    );
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space") {
      dispatch(
        playPause({
          type: "oppose",
        })
      );
    } else if (e.key === "n") {
      playNextSong();
    } else if (e.key === "m") {
      dispatch(muteUnmute());
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);

    return () => {
      dispatch(
        playPause({
          type: "pause",
        })
      );
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    dispatch(
      getTrack({
        playSong: false,
        prevSongId: null,
      })
    );
  }, []);

  useEffect(() => {
    if (track?.trackName && isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }

    if (isPlaying) {
      setShowPlayLabel(false);
    }
  }, [isPlaying, track, audioRef]);

  return (
    <>
      <TrackInfo />
      <div className="flex gap-4 items-center">
        <PlayerBar />
        <div>
          {showPlayLabel && (
            <p className="text-muted-foreground font-semibold bg-muted/80 p-1 px-2 rounded-md text-sm">
              Press the play button{" "}
              <span className="hidden sm:inline">or spacebar</span> to start
            </p>
          )}
        </div>
      </div>
      <audio
        ref={audioRef}
        src={track?.trackUrl}
        onEnded={playNextSong}
        muted={isMuted}
      />
    </>
  );
};

export default Player;
