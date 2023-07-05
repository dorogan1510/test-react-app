import Games from './Games'
import HomeButton from './HomeButton'
import Selects from './Selects'

const Home = () => {
    return (
        <div className='page'>
            <Selects />
            <Games />
            <HomeButton />
        </div>
    )
}

export default Home
