import { createSlice } from "@reduxjs/toolkit";


const chat = createSlice({
  name: 'chat',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      
      if (state.messages.length > 10) {
        state.messages.shift()
      }

      state.messages.push(action.payload)
    }
  }
})

export const { addMessage } = chat.actions

export default chat.reducer