import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload
    },
    closeModal: (state) => {
        state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer