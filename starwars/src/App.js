import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterContainer from "./CharacterContainer.js";
import Pagination from "./Pagination.js"


const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacterList() {
      try {
        const characterData = await axios.get(`https://swapi.co/api/people/?page=${page}`)
        setCharacterList(characterData.data.results);
      } catch (err) {
        console.log(err)
      }
    }
    getCharacterList();
  }, [page])

  function changePage(direction) {
    if (direction === "left" && page > 1) {
      setPage(page - 1)
    } else if (direction === "right" && page < 9) {
      setPage(page + 1)
    }
  }  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Pagination func={changePage}/>
      <CharacterContainer characters={characterList}/>
    </div>
  );
}

export default App;
