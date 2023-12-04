import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
    activeCategory: null
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videoList = action.payload;
    },
    addActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    }
  }
});

export const { addVideosList, addActiveCategory } = videoSlice.actions

export default videoSlice.reducer
