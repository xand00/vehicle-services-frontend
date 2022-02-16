import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import modalSlice from '../features/modal/modalSlice'
import contactInfoSlice from '../features/contactInfo/contactInfoSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
	contactInfo: contactInfoSlice
  },
})
