import { configureStore } from '@reduxjs/toolkit'
import historyReducer from '../features/historySlice'

export default configureStore({
  reducer: {
    history: historyReducer
  },
})