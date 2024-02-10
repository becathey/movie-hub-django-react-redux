import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const result = await axios('/movies/api/movies/')
    return result.data
})

const initialState = {
    movies: []
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
    },
    // extraReducers: {
    //     [fetchAsyncMovies.pending]: () => {
    //         console.log("Pending")
    //     },
    //     [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
    //         console.log("Fetched Successfully")
    //         return {...state, movies: payload}
    //     },
    //     [fetchAsyncMovies.rejected]: () => {
    //         console.log("Rejected")
    //     }
    // }
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer