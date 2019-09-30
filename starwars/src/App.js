import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
// import styled from "styled-components";
import CharacterContainer from "./CharacterContainer.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    async function getCharacterList() {
      try {
        const characterData = await axios.get(`https://swapi.co/api/people/`)
        setCharacterList(characterData.data.results);
      } catch (err) {
        console.log(err)
      }
    }
    getCharacterList();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer characters={characterList}/>
    </div>
  );
}

export default App;
