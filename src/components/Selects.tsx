import React from 'react'
import { useDispatch } from 'react-redux'
import { dataArray, setGamesArray } from '../features/gamesArraySlice'
import { setSelectedProvider } from '../features/selectedProviderSlice'
import { setSelectedReal } from '../features/selectedRealSlice'

const Selects = () => {
    const dispatch = useDispatch()

    const uniqueProviderArray = [
        ...new Set(dataArray.map(item => item[1].provider)),
    ]

    const handleSelectReal = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedReal(e.target.value))

        if (e.target.value === 'All') {
            dispatch(setGamesArray(dataArray))
        } else {
            dispatch(
                setGamesArray(
                    dataArray.filter(data =>
                        Object.entries(data[1].real)
                            .map(([name, obj]) => ({
                                name,
                                ...obj,
                            }))
                            .map(data => data.name)
                            .includes(e.target.value)
                    )
                )
            )
        }
    }

    const handleSelectProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedProvider(e.target.value))

        if (e.target.value === 'All') {
            dispatch(setGamesArray(dataArray))
        } else {
            dispatch(
                setGamesArray(
                    dataArray.filter(
                        data => data[1].provider === e.target.value
                    )
                )
            )
        }
    }

    return (
        <div className='grid-select'>
            <select
                className='grid-select__item'
                name='real-select'
                id='real-select'
                onChange={handleSelectReal}
            >
                <option value='DOG'>All</option>
                <option value='DOG'>DOG</option>
                <option value='LTC'>LTC</option>
                <option value='USDT'>USDT</option>
                <option value='BTC'>BTC</option>
                <option value='XRP'>XRP</option>
                <option value='ETH'>ETH</option>
            </select>
            <select
                className='grid-select__item'
                name='provider-select'
                id='provider-select'
                onChange={handleSelectProvider}
            >
                <option value='All'>All</option>
                {uniqueProviderArray.map((data, index) => (
                    <option key={index} value={data}>
                        {data}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Selects
