import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/base_url'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState('');

  useEffect(() => {
    const fetchCharacters = () => {
      axios.get(`${BASE_URL}people/`)
        .then(res => {
          console.table(res.data);
          setCharacters(res.data.results)
        })
        .catch(err => {
          console.log(err);
          debugger
        });
    }
    fetchCharacters();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
