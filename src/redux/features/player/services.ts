import type { RootState } from "@/redux/store/store";
import { IGetTrackResponse } from "@/redux/types/responses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IGetTrackInput {
  playSong: boolean;
  prevSongId: number | null;
}

export const getTrack = createAsyncThunk<
  IGetTrackResponse,
  IGetTrackInput,
  {
    state: RootState;
  }
>("player/getTrack", async ({ playSong, prevSongId }, thunkAPI) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/track/${prevSongId}`
  );
  return { ...response.data, playSong };
});
