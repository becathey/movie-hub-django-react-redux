import React, {useEffect} from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { fetchAsyncMovies } from './src/features/movies/movieSlice'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import MovieList from './src/components/MovieList/MovieList'
import './App.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
    }, [dispatch])
    return (
        <div className='App'>
            <Header />
            <MovieList />
            <Footer />
        </div>
    )
}

export default App