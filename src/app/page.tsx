"use client";
import Player from "@/components/player/player";
import { useToast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import { selectPlayer } from "@/redux/features/player/playerSlice";

const HomePage = () => {
  const { status, track } = useAppSelector(selectPlayer);

  return (
    <div
      className={cn(
        `min-h-[100svh] bg-center bg-no-repeat flex flex-col bg-contain`,
        status.isLoading
          ? "bg-contain"
          : track?.artworkUrl
          ? "bg-cover"
          : "bg-contain"
      )}
      style={{
        backgroundImage: `url(${
          status.isLoading
            ? "/assets/backgrounds/loading.webp"
            : status.isError
            ? "/assets/backgrounds/bg.webp"
            : track?.artworkUrl
            ? track.artworkUrl
            : "/assets/backgrounds/loading.webp"
        })`,
      }}
    >
      <div className="flex-1 backdrop-brightness-[.4] flex">
        <div className="container flex-1 flex flex-col justify-end">
          <div className="flex justify-between items-end py-10 pt-20">
            <div className="flex flex-col items-start gap-3">
              <Player />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
