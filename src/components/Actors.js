import React from 'react';
import { actors } from '../data';

const renderMovies = array => {
  return array.map(m => <li>{m}</li>)
}
const renderActors = () => {
   return actors.map(a => 
    <div className='actor'> 
      <p> {a.name}</p>
      <ul>
        {renderMovies(a.movies)}
      </ul>
    </div>)
}

const Actors = () => {
  return (
    <div>
      <h1> Actors Page </h1>
    
      {renderActors()}
    
    </div>
  );
};

export default Actors;
