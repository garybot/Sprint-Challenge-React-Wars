import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(255,255,255,0.5);
  border: 2px solid black;
  color: black;
  margin: 0 10px;
  font-size: 1.2em;
  border-radius: 3px;
`

export default function Pagination(props) {
  return (
    <div>
      <Button onClick={() => {props.func("left")}}>&larr; Prev</Button>
      <Button onClick={() => {props.func("right")}}>Next &rarr;</Button>
    </div>
  )
}