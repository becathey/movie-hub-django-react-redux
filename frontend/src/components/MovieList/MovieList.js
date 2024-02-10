import React from 'react'
import { UseSelector, useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    const renderedMovies = movies.map(movie => (
        <MovieCard key={movie.id} data={movie} />
    ))

    return (
        <>
            <h2>Movies</h2>
            <div className='movie-container'>{renderedMovies}</div>
        </>
    )
}

export default MovieList