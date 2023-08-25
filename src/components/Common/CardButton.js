import styled from "styled-components";
import React from "react";

const CardButtonElement = styled.button`
  height: 320px;
  width: 300px;
  background: #fafafa;
  border: none;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  border: 1px solid #ccc;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    cursor: pointer;
  }
  img {
    width: 70%;
    margin: 20px 0;
  }
`;

const CardButton = ({ title, description, onClick, image }) => {
  return (
    <CardButtonElement onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    </CardButtonElement>
  );
};

export default CardButton;
