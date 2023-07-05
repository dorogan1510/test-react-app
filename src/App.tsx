import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import GameItem from './components/GameItem'

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/games/:name' element={<GameItem />}></Route>
            </Routes>
        </div>
    )
}

export default App
