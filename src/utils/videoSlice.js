import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videoList = action.payload;
    },
  }
});

export const { addVideosList } = videoSlice.actions

export default videoSlice.reducer
