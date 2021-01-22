// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
  /* External Structure */
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  max-width: 80rem;

  /* Internal Structure */
  position: relative;
  height: ${(props) => (props.expanded ? `40rem` : `5rem`)};
  overflow: hidden;
  transition: all 0.3s ease;

  /* Colors and Styles */
  background-color: white;
  border-bottom: 1px solid #bbb;
  opacity: 0.7;

  /* Internal Element Styles  */
  h2 {
    font-size: 2rem;
    line-height: 5rem;
    margin: 0;
    padding-left: 2rem;
    text-align: left;
  }
  span.arrow-down {
    font-size: 2rem;
    position: absolute;
    top: 0.7rem;
    right: 2%;
  }
`;

export default function Character({ name, gender, birth_year, height, mass }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <StyledCharacter expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <h2>{name}</h2>
      <span className="arrow-down">&#8964;</span>
      <p>Gender: {gender}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </StyledCharacter>
  )
}