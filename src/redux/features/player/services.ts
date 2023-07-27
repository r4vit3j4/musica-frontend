import type { RootState } from "@/redux/store/store";
import { IGetTrackResponse, IPostTrackResponse } from "@/redux/types/responses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IGetTrackInput {
  playSong: boolean;
  prevSongId: number | null;
}

interface IPostTrackInput {
  trackName: string;
  artist: string;
  track: File;
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

export const postTrack = createAsyncThunk<
  IPostTrackResponse,
  IPostTrackInput,
  { state: RootState }
>("player/postTrack", async ({ trackName, artist, track }, thunkAPI) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/track`,
    {
      trackName,
      artist,
      track,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
});
