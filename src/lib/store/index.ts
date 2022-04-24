import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modal/modal-slice'
import contactInfoSlice from './features/contact-info/contact-info-slice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
	  contactInfo: contactInfoSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch