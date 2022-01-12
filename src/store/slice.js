import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        email: '',
        name: ''
    },
    loggedIn: false,
    movies: [],
    savedMovies: []
}

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSavedMovies: (state, action) => {
            state.savedMovies = action.payload
        },
        addMovie: (state, action) => {
            state.savedMovies = [action.payload, ...state.savedMovies]
        },
        removeMovie: (state, action) => {
            state.savedMovies = state.savedMovies.filter(i => i._id !== action.payload)
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
    },
})

export const {
    setUser,
    setMovies,
    setSavedMovies,
    addMovie,
    removeMovie,
    setLoggedIn,
} = explorerSlice.actions

export default explorerSlice.reducer