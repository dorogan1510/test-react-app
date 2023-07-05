import { createSlice } from '@reduxjs/toolkit'
import data from '../local-data/games.json'

export const dataArray = Object.entries(data).sort(
    (a, b) => a[1].collections.popularity - b[1].collections.popularity
)

interface IDataArray {
    value: Array<Object>
}

const initialState: IDataArray = {
    value: dataArray,
}

export const gamesArraySlice = createSlice({
    name: 'gamesArray',
    initialState,
    reducers: {
        setGamesArray: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setGamesArray } = gamesArraySlice.actions

export default gamesArraySlice.reducer
