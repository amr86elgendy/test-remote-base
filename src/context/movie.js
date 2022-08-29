import { createContext, useContext, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const newMovieList = [...state.movieList, action.payload];

      return { ...state, movieList: newMovieList };
    default:
      return state;
  }
};

// initial state
const initialState = {
  movieList: [],
};

// create context
const MovieContext = createContext({});

// context provider
export const MovieProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
