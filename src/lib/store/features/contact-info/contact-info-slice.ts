import { ContactInfo } from '@/types/vehicle-services-models/contact-info'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactInfoState {
  contactInfo: ContactInfo,
  fullPhoneNumberForLink: string
}

const initialState = {
  contactInfo: {
    email: null,
    fullPhoneNumber: null,
  },
  fullPhoneNumberForLink: '',
} as ContactInfoState

export const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    updateContactInfo: (state: ContactInfoState, action: PayloadAction<ContactInfo>) => {
      state.contactInfo = action.payload
    },
    updateFullPhoneNumberForLink: (state: ContactInfoState, action: PayloadAction<string>) => {
      state.fullPhoneNumberForLink = action.payload
    },
  },
})

export const { updateContactInfo, updateFullPhoneNumberForLink } = contactInfoSlice.actions

export default contactInfoSlice.reducer
