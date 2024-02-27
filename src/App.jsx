import React, { useState } from "react";

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const wordObj = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseTerm,
    );
    if (wordObj) {
      setDefinition(wordObj.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
