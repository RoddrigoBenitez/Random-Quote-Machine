import React, {useState, useEffect} from 'react'
import './App.css';


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


//este es el componente de quote machine
const QuoteMachine = ({ quote, author, newFetch, handleNewQuote, bodyColor, buttonColor }) => (
    <div id='quote-box'>
      <p id='text'>{quote}</p>
      <h2 id='author'>- {author}</h2>
      <div className='actions'>
        <button id='new-quote' class='button' onClick={newFetch} style={{ backgroundColor: buttonColor }}>
          New Quotes
        </button>
        <a href='twitter.com/intent/tweet' target='_blank' rel="noreferrer" id='tweet-quote' style={{ backgroundColor: buttonColor }}>
        Twiter
        </a>
      </div>
    </div>
  );

// genera un color random por cada onClick q se haga al button
const getRandomIndex = () => Math.round(Math.random() * ((colors.length-1) - 0) + 0 );

const App = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  //const [bgColor, setBgColor] = React.useState('color inicial');
  const [bodyColor, setBodyColor] = React.useState('#e7c142');
  const [buttonColor, setButtonColor] = React.useState('#e7c142');
  const handleNewQuote = () => {
    setQuote("");
    setAuthor("");
    setBodyColor(colors[getRandomIndex()]);
    setButtonColor(colors[getRandomIndex()]);
  }

//this const genera el llamado a la API para obtener quots
  const newFetch = () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (data) => {
        setQuote(data.content);
        setAuthor(data.author);
      }
    )
  }

 
  useEffect( () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (data) => {
        setQuote(data.content);
        setAuthor(data.author);
      }
    )
  }, []);


  return (
    <div className="main" style={{ backgroundColor: buttonColor }}>
      <QuoteMachine quote={quote} author={author} newFetch={newFetch} handleNewQuote={handleNewQuote} buttonColor={buttonColor} bodyColor={bodyColor} />
    </div>
  );
}

export default App;
