import React from 'react';
import { directors } from '../data';

const renderGenres = array => {
  return array.map(m => <li>{m}</li>)
}
const renderDir = () => {
   return directors.map(d => 
    <div> 
      <p> {d.name}</p>
      <ul>
        {renderGenres(d.movies)}
      </ul>
    </div>)
}

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {renderDir()}
    </div>
  );
}

export default Directors

// This component should render the text Directors Page in a <h1>, and make a new <div> for each director.
//  The <div> should contain the director's name and an <ul> for each of their movies.