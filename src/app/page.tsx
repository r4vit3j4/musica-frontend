"use client";
import Player from "@/components/player/player";
import { useAppSelector } from "@/hooks/hooks";
import { selectPlayer } from "@/redux/features/player/playerSlice";

const HomePage = () => {
  const { artworkUrl } = useAppSelector(selectPlayer);

  return (
    <div
      className={`min-h-[100svh] bg-cover bg-center bg-no-repeat flex flex-col`}
      style={{
        backgroundImage: `url(${artworkUrl})`,
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
