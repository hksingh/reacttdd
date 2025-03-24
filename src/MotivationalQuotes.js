import React, { useState } from "react";
import quotes from './data/exercise.json';

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState("#f1f2f3");
  const backgroundColorChoices = ["#f1f2f3", "#a1a2a3", "#b1a2b3", "#c1a2c3", "#d1a2d3", "#e1a2e3"];

  // Function to get a random quote
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex].text);
    
    const randomIndexBackgroundColor =  Math.floor(Math.random() * backgroundColorChoices.length);
    setCurrentBackgroundColor(backgroundColorChoices[randomIndexBackgroundColor]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor:currentBackgroundColor}}>      
      <p style={{ fontStyle: "italic", fontSize: "18px", margin: "25px" }}>
        {currentQuote || "Click the button to get motivated!"}
      </p>
      <button
        onClick={generateQuote}
        style={{
          padding: "10px 20px 10px 20px",
          margin: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Get Motivated
      </button>
    </div>
  );
};

export default MotivationalQuotes;