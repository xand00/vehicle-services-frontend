import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import modalSlice from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice
  },
})