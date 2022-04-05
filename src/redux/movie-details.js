import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movie: {},
}

export const movieDetails = createSlice({
    name: 'movie-details-slice',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.movie = action
        },
    }
});

export const {selectMovie, } = movieDetails.actions;
export default movieDetails.reducer;
