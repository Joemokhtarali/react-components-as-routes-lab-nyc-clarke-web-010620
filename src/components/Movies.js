import React from 'react';
import { movies } from '../data';

const renderGenres = array => {
  return array.map(g => <li>{g}</li>)
}
const renderMovies = () => {
   return movies.map(movie => 
    <div> 
      <p> {movie.title}</p>
      <p> {movie.time}</p>
      <ul>
        {renderGenres(movie.genres)}
      </ul>
    </div>)
}

const Movies = (movies) => {
  return (
    <div>
      <h1> Movies Page </h1>
        {renderMovies(movies)}
    </div>
  );
};

export default Movies;


// This component should render the text Movies Page in a <h1>,
//  and make a new <div> for each movie. 
//  The <div> should contain the movie's title, time and an <ul> for each genre.