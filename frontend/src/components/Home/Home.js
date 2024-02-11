import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies } from "../../features/movies/movieSlice"
import MovieList from "../MovieList/MovieList"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
    }, [dispatch])

    return (
        <div className="home">
            <MovieList />
        </div>
    )
}

export default Home