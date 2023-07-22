import { createSlice } from "@reduxjs/toolkit";
import { getTrack } from "./services";
import { IPlayerState } from "@/redux/types/states";
import { RootState } from "@/redux/store/store";

const initialState: IPlayerState = {
  isPlaying: false,
  isMuted: false,
  track: null,
  artworkUrl: "/assets/backgrounds/bg.webp",
  status: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause: (state, action) => {
      if (action.payload.type === "pause") {
        state.isPlaying = false;
      } else if (action.payload.type === "play") {
        state.isPlaying = true;
      } else if (action.payload.type === "oppose") {
        state.isPlaying = !state.isPlaying;
      }
    },
    muteUnmute: (state) => {
      state.isMuted = !state.isMuted;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrack.pending, (state) => {
        state.isPlaying = false;
        state.status.isLoading = true;
        state.status.isError = false;
        state.status.error = null;
      })
      .addCase(getTrack.fulfilled, (state, action) => {
        state.track = action.payload;
        state.status.isLoading = false;
        state.status.isError = false;
        state.status.error = null;
        if (action.payload.playSong) {
          state.isPlaying = true;
        } else {
          state.isPlaying = false;
        }
      })
      .addCase(getTrack.rejected, (state, action) => {
        state.status.isLoading = false;
        state.status.isError = true;
        state.status.error = "Something went wrong, please try again";
      });
  },
});

export const { playPause, muteUnmute } = playerSlice.actions;
export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
