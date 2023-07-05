import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IItemsQuantity {
    value: number
}

const initialState: IItemsQuantity = {
    value: 12,
}

export const itemsQtySlice = createSlice({
    name: 'itemsQuantity',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { incrementByAmount } = itemsQtySlice.actions

export default itemsQtySlice.reducer
