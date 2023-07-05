import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store/store'
import img from '../img/img1.jpeg'

const Games = () => {
    const itemsQty = useSelector((state: RootState) => state.itemsQty.value)
    const gamesArray = useSelector((state: RootState) => state.gamesArray.value)

    return (
        <div className='grid-games'>
            {gamesArray &&
                gamesArray.slice(0, itemsQty).map((data: any) => (
                    <Link key={data[0]} to={`/games/${data[1].title}`}>
                        <div>
                            <img src={img} alt='game'></img>
                            <p className='grid-games__text'>{data[1].title}</p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default Games
