import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Movie } from '@Interfaces/movies';

interface IInitialState {
  movies: Movie[];
  popularMovies: Movie[];
  tv: Movie[];
}

const initialState: IInitialState = {
  movies: [],
  popularMovies: [],
  tv: []
};

export default createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, actions: PayloadAction<Movie[]>) => {
      state.movies = actions.payload;
    },
    addPopularMovies: (state, actions: PayloadAction<Movie[]>) => {
      state.popularMovies = actions.payload;
    },
    addTV: (state, actions: PayloadAction<Movie[]>) => {
      state.tv = actions.payload;
    }
  }
});
