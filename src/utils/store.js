import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import searchSlice from './searchSlice'
import chatSlice from './ChatSlice'
import userSlice from './userSlice'
import videoSlice from './videoSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    user: userSlice,
    video: videoSlice
  }
})

export default store
