import React, {useEffect} from 'react'
import axios from 'axios'
import { UseDispatch, useDispatch } from 'react-redux'
import { addMovies } from './src/features/movies/movieSlice'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import './App.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios('/movies/api/movies/')
            .catch((err) => {
                console.log("Error:", err)
            })
            dispatch(addMovies(result.data))
        }
        fetchMovies()
    }, [])
    return (
        <div className='App'>
            <Header />
            <h2>Movies</h2>
            <Footer />
        </div>
    )
}

export default App