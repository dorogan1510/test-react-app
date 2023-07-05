import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ISelectedProvider {
    value: string
}

const initialState: ISelectedProvider = {
    value: 'All',
}

export const selectedProviderSlice = createSlice({
    name: 'selectedProvider',
    initialState,
    reducers: {
        setSelectedProvider: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setSelectedProvider } = selectedProviderSlice.actions

export default selectedProviderSlice.reducer
