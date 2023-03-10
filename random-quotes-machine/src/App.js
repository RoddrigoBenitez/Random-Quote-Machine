import React, {useState, useEffect} from 'react'
import './App.css';

const quoteData = [
  {text:'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: ' -Nelson Mandela'},
  {text:"In the end, it's not the years in your life that count. It's the life in your years. ", author: '-Abraham Lincoln'},
  {text:'Never let the fear of striking out keep you from playing the game.', author: '-Babe Ruth'},
  {text:'Life is either a daring adventure or nothing at all.', author: '-Helen Keller'},
  {text:"Many of life's failures are people who did not realize how close they were to success when they gave up.", author: ' -Thomas A. Edison'},
  {text:'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.', author: ' -Dr. Seuss'},
  {text: "Whoever is happy will make others happy too.", author: '-Anne Frank'},
  {text:'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: ' -Ralph Waldo Emerson'},
  {text:'When you reach the end of your rope, tie a knot in it and hang on.', author: ' -Franklin D. Roosevelt'},
]

// this VAr is for colors the quote machine
const colors = [
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
  '#73A857',
  '#e7c142'
];

const QuoteMachine = ({ quote, handleNewQuote, bodyColor, buttonColor }) => (
    <div id='quote-box'>
      <p id='text'>{quote.text}</p>
      <h2 id='author'>{quote.author}</h2>
      <div class='actions'>
        <button id='new-quote' class='button' onClick={handleNewQuote} style={{backgroundColor: buttonColor}}>
          New Quotes
        </button>
        <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote' style={{backgroundColor: buttonColor}}>
        Twiter
        </a>
      </div>
    </div>
  );

const getRandomIndex = () => Math.round(Math.random() * ((quoteData.length-1) - 0) + 0 );


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  //const [bgColor, setBgColor] = React.useState('color inicial');
  const [bodyColor, setBodyColor] = React.useState('#e7c142');
  const [buttonColor, setButtonColor] = React.useState('#e7c142');
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
    setBodyColor(colors[getRandomIndex()]);
    setButtonColor(colors[getRandomIndex()]);
  }
  return (
    <div className="main" style={{backgroundColor: buttonColor}}>
      <QuoteMachine quote={quote} handleNewQuote={handleNewQuote} buttonColor={buttonColor} bodyColor={bodyColor} />
    </div>
  );
}

export default App;
