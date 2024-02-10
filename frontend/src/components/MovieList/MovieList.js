import React from 'react'
import { UseSelector, useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css'

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    const renderedMovies = movies.map(movie => (
        <MovieCard key={movie.id} data={movie} />
    ))

    return (
        <>
            <h2>Top Movies</h2>
            <div className='movie-container'>{renderedMovies}</div>
        </>
    )
}

export default MovieList