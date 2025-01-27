import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;  
`

export default function CharacterContainer(props) {
  return (
    <Container>      {        
        props.characters.map(character => {
          return <CharacterCard character={character} key={character.name}/>
        })
      }
    </Container>
    )
}