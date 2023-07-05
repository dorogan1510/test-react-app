import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ISelectedReal {
    value: string
}

const initialState: ISelectedReal = {
    value: 'All',
}

export const selectedRealSlice = createSlice({
    name: 'selectedReal',
    initialState,
    reducers: {
        setSelectedReal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setSelectedReal } = selectedRealSlice.actions

export default selectedRealSlice.reducer
