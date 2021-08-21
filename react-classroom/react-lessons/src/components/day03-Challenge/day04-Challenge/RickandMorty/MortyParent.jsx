import React, { useState, useEffect } from "react";

const MortyParent = (props) => {
  const [results, setResults] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  const handleClick = () => {
    fetchURL();
  };
  return (
    <div>
      <p>Hello from Morty</p>
      <button onClick={handleClick}>Click for Morty</button>
    </div>
  );
};

export default MortyParent;
