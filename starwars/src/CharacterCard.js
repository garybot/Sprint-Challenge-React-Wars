import React from "react";
import styled from "styled-components";

const Card = styled.article`
  margin: 5px auto;
  width: 350px;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.3);
  display: flex;
  flex-flow: row wrap;
`
const Name = styled.h2`
  width: 100%;
  text-align: center;
`
const Measurement = styled.span`
  width: 45%;
`



export default function CharacterCard(props) {
  return (
    <Card>
      <Name>{props.character.name}</Name>
      <Measurement>Height: {props.character.height}</Measurement>
      <Measurement>Weight: {props.character.mass}</Measurement>
    </Card>
    )
}