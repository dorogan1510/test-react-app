import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../features/itemsQtySlice'

const HomeButton = () => {
    const dispatch = useDispatch()

    return (
        <button
            className='show-more-button'
            onClick={() => dispatch(incrementByAmount(12))}
        >
            Показать еще
        </button>
    )
}

export default HomeButton
