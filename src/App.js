import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <div className="quote-card">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
      <div className="saved-quotes">
        <h2>Saved Quotes</h2>
        <ul>
          {savedQuotes.map((savedQuote, index) => (
            <li key={index}>{savedQuote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
