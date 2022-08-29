import React, { useState } from 'react'
import { useMovieContext } from '../context/movie';

const MovieForm = () => {
  const { dispatch, movieList } = useMovieContext()
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [duration, setDuration] = useState('');
  const [showErr, setShowErr] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'rating') {
      setRating(e.target.value);
    } else {
      setDuration(e.target.value);
    }
    setShowErr(false);
  };

  const validateDuration = (str) => {
    const lastLetter = str.substr(-1);
    const num = str.substring(0, str.length - 1);
    if (lastLetter === 'h' || lastLetter === 'm') {
      if (isNaN(num)) {
        return false;
      }
      return true
    }
    return false
  };

  const reset = () => {
    setName('')
    setRating('')
    setDuration('')
  }

  console.log(movieList);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDuration(duration)) {
      const movie = { name, rating, duration };
      reset();
      dispatch('ADD_MOVIE', movie)
    } else {
      reset();
      setShowErr(true);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      <input type="number" name="rating" id="rating" value={rating} onChange={handleChange} />
      <input type="text" name="duration" id="duration" value={duration} onChange={handleChange} />
      {showErr && <div>error</div>}
      <button type="submit">submit</button>
    </form>
  )
}

export default MovieForm