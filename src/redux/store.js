import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import authReduser from './slices/authSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReduser
  },
})