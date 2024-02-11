import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const result = await axios('/movies/api/movies/')
    return result.data
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) => {
    const result = await axios(`/movies/api/movies/${id}/`)
    return result.data
})

const initialState = {
    movies: [],
    selectMovie: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, () => {
                console.log("Pending")
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
                console.log("Fetched Successfully")
                return {...state, movies: payload}
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log("Rejected")
            })
            .addCase(fetchAsyncMovieDetail.fulfilled, (state, {payload}) => {
                console.log("Fetched Successfully")
                return {...state, selectMovie: payload}
            })
    },
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getSelectedMovie = (state) => state.movies.selectMovie
export default movieSlice.reducer