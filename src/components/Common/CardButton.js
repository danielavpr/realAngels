import styled from 'styled-components'
import React from 'react';

const CardButtonElement = styled.button`
  height: 320px;
  width: 300px;
  background: #fafafa;
  border: none;
  border-radius: 8px;
  transition: box-shadow .3s;
  border: 1px solid #ccc;
  :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    cursor: pointer; 
  }
`

const CardButton = ({ title, description }) => {
  return (
    <CardButtonElement>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardButtonElement>
  )
}

export default CardButton
