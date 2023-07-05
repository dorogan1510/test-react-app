import { configureStore } from '@reduxjs/toolkit'
import gamesArrayReducer from '../features/gamesArraySlice'
import itemsQtyReducer from '../features/itemsQtySlice'
import selectedProviderSliceReducer from '../features/selectedProviderSlice'
import selectedRealSliceReducer from '../features/selectedRealSlice'

export const store = configureStore({
    reducer: {
        itemsQty: itemsQtyReducer,
        selectedProvider: selectedProviderSliceReducer,
        selectedReal: selectedRealSliceReducer,
        gamesArray: gamesArrayReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
