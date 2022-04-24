import { IDProp } from '@/types/props'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  value: IDProp | null,
}

const initialState = {
  value: null
} as ModalState

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    closeModal: (state: ModalState) => {
      state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
