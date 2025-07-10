import './App.css';
import { useState } from 'react';
import quotes from './quotes'; // Assuming you have a quoteData.js file with text and author
import XIcon from '@mui/icons-material/X';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const colors = [
  '#282c34', '#353946', '#41455a', '#4e526d', '#5a5e81',
  '#6c7295', '#7880a8', '#859ebb', '#92bccc', '#9fdadb'
];

function App() {
  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const [currentQuote, setCurrentQuote] = useState(quotes[getRandomIndex(quotes)]);
  const [color, setColor] = useState(colors[getRandomIndex(colors)]);

  function generateRandomQuote() {
    const randomQuote = quotes[getRandomIndex(quotes)];
    let newColor = colors[getRandomIndex(colors)];
    // Ensure new color is different from current
    while (newColor === color && colors.length > 1) {
      newColor = colors[getRandomIndex(colors)];
    }
    setCurrentQuote(randomQuote);
    setColor(newColor);
  }

  return (
    <div className="App" style={{ backgroundColor: color, transition: 'background 0.5s' }}>
      <div id="quote-box" className="quote-box" style={{ color: color, borderColor: color, transition: 'color 0.5s, border-color 0.5s', backgroundColor: '#fff' }}>
        <div id="text">
          <span><FormatQuoteIcon /></span>{currentQuote.text}
        </div>
        <div id="author" style={{ color: color }}>
          - {currentQuote.author}
        </div>
        <button id="new-quote" onClick={generateRandomQuote} style={{ backgroundColor: color, color: '#fff', transition: 'background 0.5s, color 0.5s' }}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: color, transition: 'color 0.5s' }}
        >
          <XIcon />
        </a>
      </div>
      <footer>
        <p>by Jestry98</p>
      </footer>
    </div>
  );
}

export default App;