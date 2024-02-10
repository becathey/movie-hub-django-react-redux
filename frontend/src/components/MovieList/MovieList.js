import React from 'react'
import { UseSelector, useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies)

    return (
        <h2>MovieList</h2>
    )
}

export default MovieList