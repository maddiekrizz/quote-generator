import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        const data = response.data;
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  
  return (
    <div className="container">
      <div className="quotesy">
        <h1 className="hi">{quote}</h1>
        <h3 className="iam">{author}</h3>
      </div>
      <button className="button" onClick={fetchQuote}>Generate Quote</button>
    </div>
  );
}

export default QuoteGenerator;

 

