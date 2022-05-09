import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SiteInfoState {
  id: string | number | null,
  name: string | null,
}

const initialState = {
  name: null
} as SiteInfoState

export const siteInfoSlice = createSlice({
  name: 'siteInfo',
  initialState,
  reducers: {
    updateSiteInfo: (state: SiteInfoState, action: PayloadAction<SiteInfoState>) => {
      return { ...action.payload }
    },
  },
})

export const { updateSiteInfo } = siteInfoSlice.actions

export default siteInfoSlice.reducer
