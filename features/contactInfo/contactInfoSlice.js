import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contactInfo: {},
  fullPhoneNumberForLink: '',
}

export const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    updateContactInfo: (state, action) => {
      state.contactInfo = action.payload
    },
    updateFullPhoneNumberForLink: (state, action) => {
      state.fullPhoneNumberForLink = action.payload
    },
  },
})

export const { updateContactInfo, updateFullPhoneNumberForLink } = contactInfoSlice.actions

export default contactInfoSlice.reducer
