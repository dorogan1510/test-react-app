import { Link, useParams } from 'react-router-dom'

const GameItem = () => {
    const params = useParams()
    const { name } = params
    return (
        <div className='game-item-page'>
            <Link to='/'>
                <button className='game-item-page__button'>На главную</button>
            </Link>
            <div className='game-item-page__text'>{name}</div>
        </div>
    )
}

export default GameItem
