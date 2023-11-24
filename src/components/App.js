import React, { useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const [quote, setQuote] = useState({});
  const [colorIndex, setColorIndex] = useState(0);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  const quoteStyle = {
    backgroundColor: colors[colorIndex],
  };

  return (
    <div id="main">
      <div id="wrapper" style={quoteStyle}>
        <div className="quote-text">
          {quote.content}
        </div>
        <div className="quote-author">
          {quote.author}
        </div>
        <button id="new-quote" className="button" onClick={fetchRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
