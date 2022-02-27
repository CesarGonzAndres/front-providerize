import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './example/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
