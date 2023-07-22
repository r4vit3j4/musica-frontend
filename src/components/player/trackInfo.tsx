"use client";
import { useAppSelector } from "@/hooks/hooks";
import { selectPlayer } from "@/redux/features/player/playerSlice";
import { Skeleton } from "../ui/skeleton";

const TrackInfo = () => {
  const { status, track } = useAppSelector(selectPlayer);

  return (
    <div className="flex flex-col gap-2">
      {status.isLoading ? (
        <Skeleton className="h-10 w-80" />
      ) : (
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {track?.trackName}
        </h2>
      )}

      {status.isLoading ? (
        <Skeleton className="h-4 w-20" />
      ) : (
        <p className="text-lg font-semibold text-muted-foreground">
          {track?.artist}
        </p>
      )}
    </div>
  );
};

export default TrackInfo;
